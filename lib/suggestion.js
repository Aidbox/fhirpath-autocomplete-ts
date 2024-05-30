import { ScopeType, FHIRToken, FHIRTokenType, reduce } from './treeReducer';
import { FHIRPATH_FUNCTIONS, FHIRPATH_FUNCTIONS_MAP } from './fhirpath_functions';
export var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind.Text = 1;
    CompletionItemKind.Method = 2;
    CompletionItemKind.Function = 3;
    CompletionItemKind.Constructor = 4;
    CompletionItemKind.Field = 5;
    CompletionItemKind.Variable = 6;
    CompletionItemKind.Class = 7;
    CompletionItemKind.Interface = 8;
    CompletionItemKind.Module = 9;
    CompletionItemKind.Property = 10;
    CompletionItemKind.Unit = 11;
    CompletionItemKind.Value = 12;
    CompletionItemKind.Enum = 13;
    CompletionItemKind.Keyword = 14;
    CompletionItemKind.Snippet = 15;
    CompletionItemKind.Color = 16;
    CompletionItemKind.File = 17;
    CompletionItemKind.Reference = 18;
    CompletionItemKind.Folder = 19;
    CompletionItemKind.EnumMember = 20;
    CompletionItemKind.Constant = 21;
    CompletionItemKind.Struct = 22;
    CompletionItemKind.Event = 23;
    CompletionItemKind.Operator = 24;
    CompletionItemKind.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
function resolveReference(specmap, node) {
    if (node.hasOwnProperty("elementReference")) {
        return specmap[node["elementReference"]];
    }
    else if (node.hasOwnProperty("elements")) {
        return node["elements"];
    }
    else if (node.hasOwnProperty("type")) {
        return specmap[node["type"]];
    }
    else {
        return null;
    }
}
function isPrimitive(node) {
    return node.hasOwnProperty("kind") && node["kind"] === "primitive-type";
}
function resolveWhile(specmap, node, until) {
    let currentNode = node;
    while (currentNode !== null && !currentNode.hasOwnProperty(until) && !isPrimitive(currentNode)) {
        currentNode = resolveReference(specmap, currentNode);
    }
    return currentNode ? currentNode[until] : null;
}
function resolveElements(fhirschemas, node) {
    let elements = [];
    if (node) {
        if (node.hasOwnProperty("elements")) {
            elements = elements.concat(Object.entries(node["elements"]));
        }
        let typeDefinition = null;
        if (node.hasOwnProperty("type") && !node.hasOwnProperty("id")) {
            typeDefinition = fhirschemas[node["type"]];
            if (typeDefinition && typeDefinition.hasOwnProperty("elements")) {
                elements = elements.concat(Object.entries(typeDefinition["elements"]));
            }
        }
        let baseNode = typeDefinition;
        while (baseNode && baseNode.hasOwnProperty("base")) {
            baseNode = fhirschemas[baseNode["base"]];
            if (baseNode && baseNode.hasOwnProperty("elements")) {
                elements = elements.concat(Object.entries(baseNode["elements"]));
            }
        }
    }
    return elements;
}
function findField(fhirschemas, node, field) {
    let currentNode = node;
    let visitedTypes = new Set();
    while (currentNode) {
        if (currentNode.hasOwnProperty(field)) {
            return currentNode[field];
        }
        if (currentNode.hasOwnProperty("elements")) {
            let elements = currentNode["elements"];
            if (elements.hasOwnProperty(field)) {
                return elements[field];
            }
        }
        if (currentNode.hasOwnProperty("elementReference")) {
            return resolvePath(fhirschemas, currentNode["elementReference"]);
        }
        if (currentNode.hasOwnProperty("base")) {
            currentNode = fhirschemas[currentNode["base"]];
        }
        else if (currentNode.hasOwnProperty("type")) {
            currentNode = fhirschemas[currentNode["type"]];
        }
        else {
            return null;
        }
        if (currentNode) {
            let id = currentNode["id"];
            if (visitedTypes.has(id)) {
                return null;
            }
            visitedTypes.add(currentNode["id"]);
        }
    }
}
function resolvePath(specmap, path) {
    if (path.length > 0) {
        let currentNode = specmap[path[0]];
        if (currentNode === null || currentNode === undefined) {
            return null;
        }
        for (let p of path.slice(1)) {
            currentNode = findField(specmap, currentNode, p);
            if (currentNode === null) {
                return null;
            }
        }
        return currentNode;
    }
    return null;
}
const ThisKeyword = {
    label: "$this",
    kind: CompletionItemKind.Keyword,
    detail: null
};
const IndexKeyword = {
    label: "$index",
    kind: CompletionItemKind.Keyword,
    detail: "number"
};
const TotalKeyword = {
    label: "$total",
    kind: CompletionItemKind.Keyword
};
function makePathFromParentContext(type, context) {
    let fullPath = [];
    if (context.schemaPath.length > 0) {
        if (context.schemaPath[0].type !== FHIRTokenType.Type) {
            fullPath.push(new FHIRToken(FHIRTokenType.Type, type));
        }
        fullPath = fullPath.concat(context.schemaPath);
    }
    else {
        if (context.token.type !== FHIRTokenType.Type) {
            fullPath.push(new FHIRToken(FHIRTokenType.Type, type));
        }
    }
    if (context.token.type === FHIRTokenType.Identifier
        || context.token.type === FHIRTokenType.Keyword) {
        fullPath.push(context.token);
    }
    return fullPath;
}
function makePathFromContext(type, context, parentContext = null) {
    let fullPath = [];
    if (context.schemaPath.length > 0) {
        if (context.schemaPath[0].type !== FHIRTokenType.Type) {
            fullPath.push(new FHIRToken(FHIRTokenType.Type, type));
        }
        fullPath = fullPath.concat(context.schemaPath);
    }
    else {
        fullPath.push(new FHIRToken(FHIRTokenType.Type, type));
    }
    return fullPath;
}
function enrichWithRange(object, text, range) {
    object["textEdit"] = {
        range: range,
        newText: text
    };
}
function filterFunctionsOnType(type, functions) {
    return functions.filter(f => {
        return (f.onType && f.onType.has(type)) || f.onType === null || f.onType === undefined;
    });
}
function isPolymorphic(value) {
    return value.hasOwnProperty("choiceOf");
}
function isBasePolymorphic(value) {
    return value.hasOwnProperty("choices");
}
function nodeToOptions(entries, kind, range) {
    if (entries) {
        return entries
            .filter(([_, value]) => !isBasePolymorphic(value))
            .map(([key, value]) => {
            let newText;
            if (isPolymorphic(value)) {
                newText = `${value["choiceOf"]}.ofType(${value["type"]})`;
            }
            else {
                newText = key;
            }
            return {
                label: key,
                kind: kind,
                detail: value["type"],
                textEdit: {
                    range: range,
                    newText: newText
                }
            };
        });
    }
    return [];
}
function constantsToOptions(currentValue, constants, range) {
    console.debug("fhirpathautocomplete.constants", typeof constants, constants);
    return constants
        .map(constant => {
        let newText;
        if (currentValue.type === FHIRTokenType.ExternalConstant) {
            if (currentValue.value.startsWith('`')) {
                newText = '%`' + constant["name"] + '`';
            }
            else if (currentValue.value.startsWith("'")) {
                newText = "%'" + constant["name"] + "'";
            }
            else {
                newText = "%" + constant["name"];
            }
        }
        else {
            newText = "%" + constant["name"];
        }
        return {
            label: constant["name"],
            kind: CompletionItemKind.Constant,
            detail: constant["type"],
            textEdit: {
                range: range,
                newText: newText
            }
        };
    });
}
function functionsToOptions(functions, range) {
    return functions.map(f => {
        return {
            label: f.name,
            kind: CompletionItemKind.Method,
            detail: f.returnType,
            textEdit: {
                range: range,
                newText: f.insertText
            }
        };
    });
}
function getSpecMapTypes(specmap, range) {
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
        };
    });
}
function replaceKeywords(path, outerType = null) {
    if (path.length > 0) {
        if (path[0].type === FHIRTokenType.Keyword) {
            if (path[0].value === "$this") {
                if (outerType === null || outerType === undefined) {
                    return [];
                }
                path[0] = new FHIRToken(FHIRTokenType.Type, outerType);
            }
            else if (path[0].value === "$index") {
                path[0] = new FHIRToken(FHIRTokenType.Type, "integer");
            }
        }
        let schemaPath = [];
        path.forEach(p => {
            if (p.type === FHIRTokenType.Keyword) {
                if (p.value === "$index") {
                    schemaPath.push(new FHIRToken(FHIRTokenType.Type, "integer"));
                }
            }
            else {
                schemaPath.push(p);
            }
        });
        return schemaPath;
    }
    return path;
}
function _suggest(fhirschemas, type, forEachExpressions, externalConstants, fhirpath, cursor) {
    let schemaNode = null;
    let parentContext = null;
    let parentNode = null;
    console.debug("fhirpathautocomplete.args", `type: ${type}; forEachExpressions: ${forEachExpressions}; fhirpath: ${fhirpath}; cursor: ${cursor}`);
    let autocompleteContext = reduce(fhirpath, cursor);
    console.debug("fhirpathautocomplete.autocompleteContext", autocompleteContext);
    if (forEachExpressions.length > 0) {
        let parentExpression = forEachExpressions.join(".");
        parentContext = reduce(parentExpression, parentExpression.length + 1);
        let parentPath = makePathFromParentContext(type, parentContext);
        let parentPathWithourKeywords = replaceKeywords(parentPath, type);
        parentNode = resolvePath(fhirschemas, parentPathWithourKeywords.map(e => e.value));
        if (parentNode === null || parentNode === undefined) {
            return {
                isComplete: true,
                items: []
            };
        }
        if (autocompleteContext.schemaPath.length === 0
            && autocompleteContext.token.type === FHIRTokenType.Empty) {
            schemaNode = parentNode;
        }
        else {
            let schemaPath = makePathFromContext(parentNode["type"], autocompleteContext);
            let fullSchemaPath = replaceKeywords(schemaPath, parentNode["type"]);
            schemaNode = resolvePath(fhirschemas, fullSchemaPath.map(e => e.value)) ?? parentNode;
        }
    }
    else {
        let fullSchemaPath = makePathFromContext(type, autocompleteContext);
        let schemaPathWithoutKeywords = replaceKeywords(fullSchemaPath, type);
        schemaNode = resolvePath(fhirschemas, schemaPathWithoutKeywords.map(e => e.value));
    }
    let nodeElements = resolveElements(fhirschemas, schemaNode);
    let scopeValue = autocompleteContext.scope.token;
    let options = [];
    switch (autocompleteContext.scope.type) {
        case ScopeType.None:
            console.debug("fhirautocomplete.scope.none", autocompleteContext);
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range));
            if (forEachExpressions.length > 0) {
                let thisKeyword = ThisKeyword;
                thisKeyword.detail = schemaNode["type"];
                enrichWithRange(thisKeyword, thisKeyword.label, autocompleteContext.token.range);
                options = options.concat([thisKeyword]);
            }
            options = options.concat(constantsToOptions(autocompleteContext.token, externalConstants, autocompleteContext.token.range));
            break;
        case ScopeType.Function:
            console.debug("fhirautocomplete.scope.function", autocompleteContext);
            if (FHIRPATH_FUNCTIONS_MAP.has(autocompleteContext.scope.token.value)) {
                let fhirpathFunction = FHIRPATH_FUNCTIONS_MAP.get(autocompleteContext.scope.token.value);
                if (fhirpathFunction.parameterTypes.some(type => type === "expression")) {
                    let indexKeyword = IndexKeyword;
                    let thisKeyword = ThisKeyword;
                    thisKeyword.detail = schemaNode["type"];
                    enrichWithRange(thisKeyword, thisKeyword.label, autocompleteContext.token.range);
                    enrichWithRange(indexKeyword, indexKeyword.label, autocompleteContext.token.range);
                    options = options.concat([thisKeyword, indexKeyword]);
                    if (scopeValue.value === "aggregate") {
                        let totalKeyword = TotalKeyword;
                        enrichWithRange(totalKeyword, totalKeyword.label, autocompleteContext.token.range);
                        options.push(totalKeyword);
                    }
                    options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range));
                    options = options.concat(constantsToOptions(autocompleteContext.token, externalConstants, autocompleteContext.token.range));
                }
                else if (fhirpathFunction.parameterTypes.some(type => type === "Type")) {
                    options = getSpecMapTypes(fhirschemas, autocompleteContext.token.range);
                }
            }
            break;
        case ScopeType.Invocation:
            console.debug("fhirautocomplete.scope.invocation.context: ", autocompleteContext);
            let type = autocompleteContext.scope.token.type;
            if (type === FHIRTokenType.Identifier
                || type === FHIRTokenType.Type
                || type === FHIRTokenType.FunctionIdentifier
                || type === FHIRTokenType.Keyword) {
                options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range));
                let functions = filterFunctionsOnType(schemaNode?.type, FHIRPATH_FUNCTIONS);
                options = options.concat(functionsToOptions(functions, autocompleteContext.token.range));
            }
            break;
        case ScopeType.Literal:
            console.debug('fhirautocomplete.scope.literal');
            break;
    }
    console.debug('fhirautocomplete.token.type', autocompleteContext.token.type);
    switch (autocompleteContext.token.type) {
        case FHIRTokenType.NonTriggeringCharacter:
            options = [];
            break;
        case FHIRTokenType.Type:
            options = getSpecMapTypes(fhirschemas, autocompleteContext.token.range);
            break;
        case FHIRTokenType.ExternalConstant:
            options = constantsToOptions(autocompleteContext.token, externalConstants, autocompleteContext.token.range);
            break;
    }
    return {
        isComplete: true,
        items: options
    };
}
export function suggest(params) {
    let fhirpath = params.fhirpath ?? "";
    return _suggest(params.fhirschemas ?? {}, params.type, params.forEachExpressions ?? [], params.externalConstants ?? [], fhirpath, params.cursor ?? Math.max(0, fhirpath.length - 1));
}
//# sourceMappingURL=suggestion.js.map