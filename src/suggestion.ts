import { AutocompleteContext, ScopeType, FHIRToken, FHIRTokenType, Range, reduce } from './treeReducer'
import { FHIRPATH_FUNCTIONS, FHIRPATH_FUNCTIONS_MAP, FhirpathFunction } from './fhirpath_functions';

namespace CompletionItemKind {
	export const Text = 1;
	export const Method = 2;
	export const Function = 3;
	export const Constructor = 4;
	export const Field = 5;
	export const Variable = 6;
	export const Class = 7;
	export const Interface = 8;
	export const Module = 9;
	export const Property = 10;
	export const Unit = 11;
	export const Value = 12;
	export const Enum = 13;
	export const Keyword = 14;
	export const Snippet = 15;
	export const Color = 16;
	export const File = 17;
	export const Reference = 18;
	export const Folder = 19;
	export const EnumMember = 20;
	export const Constant = 21;
	export const Struct = 22;
	export const Event = 23;
	export const Operator = 24;
	export const TypeParameter = 25;
}

export type CompletionItemKind = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25;

function resolveReference(specmap: Object, node: Object) : Object {
    if (node.hasOwnProperty("elementReference")) {
        return specmap[node["elementReference"]]
    } else if (node.hasOwnProperty("elements")) {
        return node["elements"]
    } else if (node.hasOwnProperty("type")) {
        return specmap[node["type"]]
    } else {
        return null
    }
}

function isPrimitive(node: Object) : boolean {
    return node.hasOwnProperty("kind") && node["kind"] === "primitive-type"
}

function resolveWhile(specmap: Object, node: Object, until: string) {
    let currentNode = node
    while (currentNode !== null && !currentNode.hasOwnProperty(until) && !isPrimitive(currentNode)) {
        currentNode = resolveReference(specmap, currentNode) as Object
    }
    return currentNode ? currentNode[until] : null
}

function resolveElements(fhirschemas: Object, node: Object): Array<[string, Object]> {
    let elements = []
    if (node) {
        let typeDefinition: Object = null
        if (node.hasOwnProperty("id")) {
            typeDefinition = node
        } else if (node.hasOwnProperty("type")) {
            typeDefinition = fhirschemas[node["type"]]
        }
        if (typeDefinition === null) {
            return elements
        }
        if (typeDefinition.hasOwnProperty("elements")) {
            elements = elements.concat(Object.entries(typeDefinition["elements"]))            
        } 
        let baseNode = typeDefinition
        while(baseNode && baseNode.hasOwnProperty("base")) {
            baseNode = fhirschemas[baseNode["base"]]
            if (baseNode && baseNode.hasOwnProperty("elements")) {
                elements = elements.concat(Object.entries(baseNode["elements"]))
            } 
        }
    }
    return elements
}

function findField(fhirschemas: Object, node: Object, field: string) : Object | null {
    let currentNode = node
    let visitedTypes = new Set<string>()
    while (currentNode) {
        if (currentNode.hasOwnProperty(field)) {
            return currentNode[field]
        } 
        if (currentNode.hasOwnProperty("elements")) {
            let elements = currentNode["elements"] as Object
            if (elements.hasOwnProperty(field)) {
                return elements[field]                
            } 
        }
        if (currentNode.hasOwnProperty("elementReference")) {
            return resolvePath(fhirschemas, currentNode["elementReference"])
        }
        if (currentNode.hasOwnProperty("base")) {
            currentNode = fhirschemas[currentNode["base"]]    
        } else if (currentNode.hasOwnProperty("type")) {
            currentNode = fhirschemas[currentNode["type"]]
        }  else {
            return null
        }
        if (currentNode) {
            let id = currentNode["id"]
            if (visitedTypes.has(id)) {
                return null
            }
            visitedTypes.add(currentNode["id"])
        }
    }
}

function resolvePath(specmap: Object, path: Array<string>) : object | null {
    if (path.length > 0) {
        let currentNode = specmap[path[0]] as Object
        if (currentNode === null || currentNode === undefined) {
            return null
        }
        for (let p of path.slice(1)) {
            currentNode = findField(specmap, currentNode, p)
            if (currentNode === null) {
                return null
            }
        }
        return currentNode
    }
    return null
}

const ThisKeyword = {
    label: "$this",
    kind: CompletionItemKind.Keyword,
    detail: null
}

const IndexKeyword = {
    label: "$index",
    kind: CompletionItemKind.Keyword,
    detail: "number"
}

const TotalKeyword = {
    label: "$total",
    kind: CompletionItemKind.Keyword
}

function makePathFromParentContext(type: string, context: AutocompleteContext) {
    let fullPath = []
    if (context.schemaPath.length > 0) {
        if (context.schemaPath[0].type !== FHIRTokenType.Type) {
            fullPath.push(new FHIRToken(FHIRTokenType.Type, type))
        }
        fullPath = fullPath.concat(context.schemaPath)
    } else {
        if (context.token.type !== FHIRTokenType.Type) {
            fullPath.push(new FHIRToken(FHIRTokenType.Type, type))
        }
    }
    if (context.token.type === FHIRTokenType.Identifier 
        || context.token.type === FHIRTokenType.Keyword) {
        fullPath.push(context.token)
    }
    return fullPath
}

function makePathFromContext(type: string, context: AutocompleteContext) {
    let fullPath = []
    if (context.schemaPath.length > 0) {
        if (context.schemaPath[0].type !== FHIRTokenType.Type) {
            fullPath.push(new FHIRToken(FHIRTokenType.Type, type))
        }
        fullPath = fullPath.concat(context.schemaPath)
    } else {
        fullPath.push(new FHIRToken(FHIRTokenType.Type, type))
    }
    return fullPath
}

function enrichWithRange(object: Object, text: string, range: Range) {
    object["textEdit"] = {
        range: range,
        newText: text
    }
}

function filterFunctionsOnType(type: string, functions: Array<FhirpathFunction>) {
    return functions.filter(f => {
        return (f.onType && f.onType.has(type)) || f.onType === null || f.onType === undefined
    })
}

function isPolymorphic(value : Object) : boolean {
    return value.hasOwnProperty("choiceOf")    
}

function isBasePolymorphic(value: Object) : boolean {
    return value.hasOwnProperty("choices")
}

function nodeToOptions(entries: Array<[string, Object]>, kind, range) {
    if (entries) {
        return entries
            .filter(([_, value]) => !isBasePolymorphic(value))
            .map(([key, value]) => {
                let newText : string
                if (isPolymorphic(value)) {
                    newText = `${value["choiceOf"]}.ofType(${value["type"]})`
                } else {
                    newText = key
                }
                return {
                    label: key,
                    kind: kind,
                    detail: value["type"],
                    textEdit: {
                        range: range,
                        newText: newText
                    }
                }
            })
    }
    return []
}


function constantsToOptions(currentValue: FHIRToken, constants: Array<Object>, range) {
    console.debug("fhirpathautocomplete.constants", typeof constants, constants)
    return constants
        .map(constant => {
            let newText : string
            if (currentValue.type === FHIRTokenType.ExternalConstant) {
                if (currentValue.value.startsWith('`')) {
                    newText = '%`' + constant["name"] + '`'
                } else if (currentValue.value.startsWith("'")) {
                    newText = "%'" + constant["name"] + "'"
                } else {
                    newText = "%" + constant["name"]
                }
            } else {
                newText = "%" + constant["name"]
            }
            return {
                label: constant["name"],
                kind: CompletionItemKind.Constant,
                detail: constant["type"],
                textEdit: {
                    range: range,
                    newText: newText
                }
            }
        })
}

function functionsToOptions(functions: Array<FhirpathFunction>, range: Range) {
    return functions.map(f => {
        return {
            label: f.name,
            kind: CompletionItemKind.Method,
            detail: f.returnType,
            textEdit: {
                range: range,
                newText: f.insertText
            }
        }
    })
}

function getSpecMapTypes(specmap: Object, range: Range) {
    return Object.keys(specmap)
        .filter(k => !k.startsWith("http"))
        .map(key => {
            return {
                label: key,
                kind: CompletionItemKind.Class,
                detail: "Type",
                textEdit: {
                    range: range,
                    newText: key
                }
            }
        })

}

function replaceKeywords(path: Array<FHIRToken>, outerType: string | null = null) : Array<FHIRToken> {
    if (path.length > 0) {
        if (path[0].type === FHIRTokenType.Keyword) {
            if (path[0].value === "$this") {
                if (outerType === null || outerType === undefined) {
                    return []
                }
                path[0] = new FHIRToken(FHIRTokenType.Type, outerType)
            } else if (path[0].value === "$index") {
                path[0] = new FHIRToken(FHIRTokenType.Type, "integer")                
            }
        }
        let schemaPath = []
        path.forEach(p => {
            if (p.type === FHIRTokenType.Keyword) {
                if (p.value === "$index") {
                    schemaPath.push(new FHIRToken(FHIRTokenType.Type, "integer")) 
                }
            } else {
                schemaPath.push(p)
            }
        })
        return schemaPath
    }
    return path
}

function _suggest(specmap: Object, type: string, parentExpressions: Array<string>, constants: Array<Object>, fhirpath: string, cursor: number) {
    let schemaNode = null
    let parentContext = null
    let parentNode = null
    console.debug("fhirpathautocomplete.args", `type: ${type}; forEachExpressions: ${parentExpressions}; fhirpath: ${fhirpath}; cursor: ${cursor}`)
    let autocompleteContext = reduce(fhirpath, cursor)
    console.debug("fhirpathautocomplete.autocompleteContext", autocompleteContext)
    if (parentExpressions.length > 0) {
        let parentExpression = parentExpressions.join(".")
        parentContext = reduce(parentExpression, parentExpression.length + 1)
        let parentPath = makePathFromParentContext(type, parentContext)
        let parentPathWithourKeywords = replaceKeywords(parentPath, type)
        parentNode = resolvePath(specmap, parentPathWithourKeywords.map(e => e.value))
        if (parentNode === null || parentNode === undefined) { 
            return {
                isComplete: true,
                items: []
            };
        }
        let schemaPath = replaceKeywords(autocompleteContext.schemaPath, parentNode["type"])
        schemaNode = resolvePath(specmap, schemaPath.map(e => e.value)) ?? parentNode
    } else {
        let fullSchemaPath = makePathFromContext(type, autocompleteContext)
        let schemaPathWithoutKeywords = replaceKeywords(fullSchemaPath, type)
        schemaNode = resolvePath(specmap, schemaPathWithoutKeywords.map(e => e.value))
    }
    let nodeElements = resolveElements(specmap, schemaNode)
    let scopeValue = autocompleteContext.scope.token
    let options = []
    switch (autocompleteContext.scope.type) {
        case ScopeType.None:
            console.debug("fhirautocomplete.scope.none", autocompleteContext)
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range))
            if (parentExpressions.length > 0) {
                let thisKeyword = ThisKeyword
                thisKeyword.detail = parentNode["type"]
                options = options.concat([thisKeyword])
            }
            options = options.concat(constantsToOptions(autocompleteContext.token, constants, autocompleteContext.token.range))
            break
        case ScopeType.Function:
            console.debug("fhirautocomplete.scope.function", autocompleteContext)
            if (FHIRPATH_FUNCTIONS_MAP.has(autocompleteContext.scope.token.value)) {
                let fhirpathFunction = FHIRPATH_FUNCTIONS_MAP.get(autocompleteContext.scope.token.value)
                if (fhirpathFunction.parameterTypes.some(type => type === "expression")) {
                    let indexKeyword = IndexKeyword
                    let thisKeyword = ThisKeyword
                    thisKeyword.detail = schemaNode["type"]
                    enrichWithRange(thisKeyword, thisKeyword.label, autocompleteContext.token.range)
                    enrichWithRange(indexKeyword, indexKeyword.label, autocompleteContext.token.range)
                    options = options.concat([thisKeyword, indexKeyword])
                    if (scopeValue.value === "aggregate") {
                        let totalKeyword = TotalKeyword
                        enrichWithRange(totalKeyword, totalKeyword.label, autocompleteContext.token.range)
                        options.push(totalKeyword)
                    }
                    options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range))
                    options = options.concat(constantsToOptions(autocompleteContext.token, constants, autocompleteContext.token.range))
                } else if (fhirpathFunction.parameterTypes.some(type => type === "Type")) {
                    options = getSpecMapTypes(specmap, autocompleteContext.token.range)
                }
            }
            break
        case ScopeType.Invocation:
            console.debug("fhirautocomplete.scope.invocation", autocompleteContext)
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range))
            let functions = filterFunctionsOnType(schemaNode?.type, FHIRPATH_FUNCTIONS)
            options = options.concat(functionsToOptions(functions, autocompleteContext.token.range))
            break
        case ScopeType.Literal:
            console.debug('fhirautocomplete.scope.literal')
            break
    }
    console.debug('fhirautocomplete.token.type', autocompleteContext.token.type)
    switch (autocompleteContext.token.type) {
        case FHIRTokenType.NonTriggeringCharacter:
            options = []
            break
        case FHIRTokenType.Type:
            options = getSpecMapTypes(specmap, autocompleteContext.token.range)
            break
        case FHIRTokenType.ExternalConstant:
            options = constantsToOptions(autocompleteContext.token, constants, autocompleteContext.token.range)
            break
    }
    return {
        isComplete: true,
        items : options
    };
}

export function suggest(params: Partial<{
    fhirschemas: Object,
    type: string,
    forEachExpressions: Array<string>,
    externalConstants: Array<{ name: string, value: string, type: string }>,
    fhirpath: string,
    cursor: number
}>) {
    let fhirpath = params.fhirpath ?? ""
    return _suggest(
        params.fhirschemas ?? {},
        params.type,
        params.forEachExpressions ?? [],
        params.externalConstants ?? [],
        fhirpath,
        params.cursor ?? Math.max(0, fhirpath.length - 1)
    )
}