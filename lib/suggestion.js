import { ScopeType, FHIRToken, FHIRTokenType, reduce } from './treeReducer';
import { FHIRPATH_FUNCTIONS, FHIRPATH_FUNCTIONS_MAP } from './fhirpath_functions';
var CompletionItemKind;
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
function resolvePath(specmap, path) {
    let currentNode = specmap[path[0].value];
    path.slice(1).forEach(p => {
        if (currentNode.hasOwnProperty(p.value)) {
            currentNode = currentNode[p.value];
        }
        else {
            currentNode = resolveWhile(specmap, currentNode, p.value);
        }
    });
    return currentNode;
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
function makePathFromToken(type, context) {
    let fullPath = [];
    if (context.token.type !== FHIRTokenType.Type) {
        fullPath.push(new FHIRToken(FHIRTokenType.Type, type));
    }
    if (context.token.type === FHIRTokenType.Identifier) {
        fullPath.push(context.token);
    }
    return fullPath;
}
function makePathWithType(type, context) {
    let fullPath = [];
    console.log(context.schemaPath);
    if (context.schemaPath[0].type === FHIRTokenType.Type) {
        fullPath = context.schemaPath;
    }
    else {
        fullPath.push(new FHIRToken(FHIRTokenType.Type, type));
        fullPath = fullPath.concat(context.schemaPath);
    }
    return fullPath;
}
function makeFullSchemaPath(type, parentContext, thisContext) {
    let fullPath = [];
    if (parentContext.schemaPath.length > 0) {
        fullPath = makePathWithType(type, parentContext);
        fullPath = fullPath.concat(thisContext.schemaPath);
    }
    else if (parentContext.token &&
        parentContext.token.type === FHIRTokenType.Identifier ||
        parentContext.token.type === FHIRTokenType.Type) {
        fullPath = fullPath.concat(makePathFromToken(type, parentContext));
        fullPath = fullPath.concat(thisContext.schemaPath);
    }
    else if (thisContext.schemaPath.length > 0) {
        fullPath = makePathWithType(type, thisContext);
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
// name|
// name.|
// name.where()|
// name.where().|
// name.where(|)
// name + |
// name +|
// name.where(Patient.name.family|)
//            |------------------| - full-path
// name.where().period.start|
// |------------------| - schema path
// name.where($this.count|())
//      |-------------------| - scope
// scopes:
// | - None - identifiers + constants
// name.| - invocation - identifier + methods
// name.where(|) - selection - identifiers + $this + $index + constants
// name.aggregate(|) - aggregation - identifiers + $this + $index + $total
// name.aggregate(family.|) - invocation - identifiers + methods
// name.count() + | - None - identifiers + constants
// "dafsd|" - Literal - nothing
//
// name.where(Patient.name.|)
//            |------------| - absolute path
// |---| - path
// [Patient name]
// 
// name.where($this.|)
// 
// [name]
// 
// name.where($index.|)
// 
// []
//
// name.where($total.|)
// 
// []
//
// Naive implementation first 
// Observation.value.ofType(Quantity).|
//                   |--------------| - last type expression
// [Quantity]
//
// (Observation.value as Quantity).|
// |-----------------------------| - last type expression
// [Quantity]
//
// name.where(given.count() > 1).select(given.join(' ')).|
// scope - invocation
// schemaPath - [name]
//
// select is not supported
// It can be supported by inspecting types from start of expression chain
// to a first base type, or, if validation is not matter, to a first
// type convertion
export function suggest(specmap, type, parentExpressions, fhirpath, cursor) {
    let parentExpression = parentExpressions.join(".");
    let parentContext = reduce(parentExpression, parentExpression.length + 1);
    let autocompleteContext = reduce(fhirpath, cursor);
    let fullSchemaPath = makeFullSchemaPath(type, parentContext, autocompleteContext);
    let schemaNode = resolvePath(specmap, fullSchemaPath);
    let nodeElements = resolveWhile(specmap, schemaNode, "elements");
    let scopeValue = autocompleteContext.scope.value;
    let options = [];
    switch (autocompleteContext.scope.type) {
        case ScopeType.None:
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range));
            if (parentExpressions.length > 0) {
                let parentFullPath;
                if (parentContext.schemaPath.length > 0) {
                    parentFullPath = makePathWithType(type, parentContext);
                }
                else {
                    parentFullPath = makePathFromToken(type, parentContext);
                }
                let parentNode = resolvePath(specmap, parentFullPath);
                let thisKeyword = ThisKeyword;
                thisKeyword.detail = parentNode["type"];
                options = options.concat([thisKeyword]);
            }
            break;
        case ScopeType.Function:
            if (FHIRPATH_FUNCTIONS_MAP.has(autocompleteContext.scope.value.value)) {
                let fhirpathFunction = FHIRPATH_FUNCTIONS_MAP.get(autocompleteContext.scope.value.value);
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
                }
            }
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range));
            break;
        case ScopeType.Invocation:
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range));
            console.log(schemaNode);
            let functions = filterFunctionsOnType(schemaNode["type"], FHIRPATH_FUNCTIONS);
            options = options.concat(functionsToOptions(functions, autocompleteContext.token.range));
            break;
        case ScopeType.Literal:
            break;
    }
    switch (autocompleteContext.token.type) {
        case FHIRTokenType.NonTriggeringCharacter:
            options = [];
            break;
        case FHIRTokenType.Type:
            options = Array.from(specmap.keys()).map(key => {
                return {
                    label: key,
                    kind: CompletionItemKind.Class,
                    detail: "Type",
                    textEdit: {
                        range: autocompleteContext.token.range,
                        newText: key
                    }
                };
            });
    }
    if (autocompleteContext.token.type === FHIRTokenType.NonTriggeringCharacter) {
        options = [];
    }
    return {
        isComplete: true,
        items: options
    };
}
function nodeToOptions(node, kind, range) {
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
            };
        });
    }
    return [];
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
//# sourceMappingURL=suggestion.js.map