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

function resolvePath(specmap: Object, path: Array<FHIRToken>) : object {
    let currentNode = specmap[path[0].value] as Object
    if (currentNode === null || currentNode === undefined) {
        return null
    }
    path.slice(1).forEach(p => {
        if (currentNode.hasOwnProperty(p.value)) {
            currentNode = currentNode[p.value]
        } else {
            currentNode = resolveWhile(specmap, currentNode, p.value)
        }
    })
    return currentNode
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

function makePathFromToken(type: string, context: AutocompleteContext) {
    let fullPath = []
    if (context.token.type !== FHIRTokenType.Type) {
        fullPath.push(new FHIRToken(FHIRTokenType.Type, type))
    }
    if (context.token.type === FHIRTokenType.Identifier) {
        fullPath.push(context.token)
    }
    return fullPath
}

function makePathWithType(type: string, context: AutocompleteContext) {
    let fullPath = []
    console.log(context.schemaPath)
    if (context.schemaPath[0].type === FHIRTokenType.Type) {
        fullPath = context.schemaPath
    } else {
        fullPath.push(new FHIRToken(FHIRTokenType.Type, type))
        fullPath = fullPath.concat(context.schemaPath)
    }
    return fullPath
}

function makeFullSchemaPath(type: string, parentContext: AutocompleteContext, thisContext: AutocompleteContext) {
    let fullPath = []
    if (parentContext.schemaPath.length > 0) {
        fullPath = makePathWithType(type, parentContext)
        fullPath = fullPath.concat(thisContext.schemaPath)
    } else if (parentContext.token &&
               parentContext.token.type === FHIRTokenType.Identifier ||
               parentContext.token.type === FHIRTokenType.Type) {
        fullPath = fullPath.concat(makePathFromToken(type, parentContext))
        fullPath = fullPath.concat(thisContext.schemaPath)
    } else if (thisContext.schemaPath.length > 0) {
        fullPath = makePathWithType(type, thisContext)
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

function nodeToOptions(node: object, kind, range) {
    if (node) {
        return Object.entries(node).map(([key, value]) => {
            return {
                label: key,
                kind: kind,
                detail: value["type"],
                textEdit: {
                    range: range,
                    newText: key
                }
            }
        })
    }
    return []
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

// TODO: $this
export function suggest(specmap: Object, type: string, parentExpressions: Array<string>, fhirpath: string, cursor: number) {
    let parentExpression = parentExpressions.join(".")
    let parentContext = reduce(parentExpression, parentExpression.length + 1)

    let autocompleteContext = reduce(fhirpath, cursor)
    let fullSchemaPath = makeFullSchemaPath(type, parentContext, autocompleteContext)
    let schemaNode = resolvePath(specmap, fullSchemaPath)
    if (schemaNode === null && schemaNode === undefined) {
        return {
            isComplete: true,
            items: []
        };
    }
    let nodeElements = resolveWhile(specmap, schemaNode, "elements")
    if (nodeElements === null && nodeElements === undefined) {
        return {
            isComplete: true,
            items: []
        };
    }

    let scopeValue = autocompleteContext.scope.value
    let options = []
    switch (autocompleteContext.scope.type) {
        case ScopeType.None:
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range))
            if (parentExpressions.length > 0) {
                let parentFullPath : Array<FHIRToken>
                if (parentContext.schemaPath.length > 0) {
                    parentFullPath = makePathWithType(type, parentContext)
                } else {
                    parentFullPath = makePathFromToken(type, parentContext)
                }
                let parentNode = resolvePath(specmap, parentFullPath)
                let thisKeyword = ThisKeyword
                thisKeyword.detail = parentNode["type"]
                options = options.concat([thisKeyword])
            }
            break
        case ScopeType.Function:
            if (FHIRPATH_FUNCTIONS_MAP.has(autocompleteContext.scope.value.value)) {
                let fhirpathFunction = FHIRPATH_FUNCTIONS_MAP.get(autocompleteContext.scope.value.value)
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
                }
            }
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range))
            break
        case ScopeType.Invocation:
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range))
            let functions = filterFunctionsOnType(schemaNode["type"], FHIRPATH_FUNCTIONS)
            options = options.concat(functionsToOptions(functions, autocompleteContext.token.range))
            break
        case ScopeType.Literal:
            break
    }
    switch (autocompleteContext.token.type) {
        case FHIRTokenType.NonTriggeringCharacter:
            options = []
            break
        case FHIRTokenType.Type:
            options = Object.keys(specmap)
                .filter(k => !k.startsWith("http"))
                .map(key => {
                    return {
                        label: key,
                        kind: CompletionItemKind.Class,
                        detail: "Type",
                        textEdit: {
                            range: autocompleteContext.token.range,
                            newText: key
                        }
                    }
                })
    }
    if (autocompleteContext.token.type === FHIRTokenType.NonTriggeringCharacter) {
        options = []
    }
    return {
        isComplete: true,
        items : options
    };
}
