"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggest = exports.CompletionItemKind = void 0;
const fhirpath_functions_1 = require("./fhirpath_functions");
const treeReducer_1 = require("./treeReducer");
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
})(CompletionItemKind = exports.CompletionItemKind || (exports.CompletionItemKind = {}));
function resolveReference(specMap, node) {
    if (node.hasOwnProperty("elementReference")) {
        return specMap[node["elementReference"]];
    }
    else if (node.hasOwnProperty("elements")) {
        return node["elements"];
    }
    else if (node.hasOwnProperty("type")) {
        return specMap[node["type"]];
    }
    else {
        return null;
    }
}
function isPrimitive(node) {
    return node.hasOwnProperty("kind") && node["kind"] === "primitive-type";
}
function resolveWhile(specMap, node, until) {
    let currentNode = node;
    while (currentNode !== null &&
        !currentNode.hasOwnProperty(until) &&
        !isPrimitive(currentNode)) {
        currentNode = resolveReference(specMap, currentNode);
    }
    return currentNode ? currentNode[until] : null;
}
function resolveElements(fhirSchemas, node) {
    let elements = [];
    if (node) {
        if (node.hasOwnProperty("elements")) {
            elements = elements.concat(Object.entries(node["elements"]));
        }
        let typeDefinition = null;
        if (node.hasOwnProperty("type") && !node.hasOwnProperty("id")) {
            typeDefinition = fhirSchemas[node["type"]];
            if (typeDefinition && typeDefinition.hasOwnProperty("elements")) {
                elements = elements.concat(Object.entries(typeDefinition["elements"]));
            }
        }
        let baseNode = typeDefinition ?? node;
        while (baseNode && baseNode.hasOwnProperty("base")) {
            baseNode = fhirSchemas[baseNode["base"]];
            if (baseNode && baseNode.hasOwnProperty("elements")) {
                elements = elements.concat(Object.entries(baseNode["elements"]));
            }
        }
    }
    return elements;
}
function findField(fhirSchemas, node, field) {
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
            return resolvePath(fhirSchemas, currentNode["elementReference"]);
        }
        if (currentNode.hasOwnProperty("base")) {
            currentNode = fhirSchemas[currentNode["base"]];
        }
        else if (currentNode.hasOwnProperty("type")) {
            currentNode = fhirSchemas[currentNode["type"]];
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
function resolvePath(specMap, path) {
    if (path.length > 0) {
        let currentNode = specMap[path[0]];
        if (currentNode === null || currentNode === undefined) {
            return null;
        }
        for (let p of path.slice(1)) {
            currentNode = findField(specMap, currentNode, p);
            if (currentNode === null) {
                return null;
            }
        }
        return currentNode;
    }
    return null;
}
function resolvePathFromNode(specMap, path, from) {
    if (path.length > 0) {
        let currentNode = from;
        for (let p of path) {
            currentNode = findField(specMap, currentNode, p);
            if (currentNode === null) {
                return null;
            }
        }
        return currentNode;
    }
    return from;
}
const ThisKeyword = {
    label: "$this",
    kind: CompletionItemKind.Keyword,
    detail: null,
};
const IndexKeyword = {
    label: "$index",
    kind: CompletionItemKind.Keyword,
    detail: "number",
};
const TotalKeyword = {
    label: "$total",
    kind: CompletionItemKind.Keyword,
};
function makePathFromParentContext(type, context) {
    let fullPath = [];
    if (context.schemaPath.length > 0) {
        if (context.schemaPath[0].type !== treeReducer_1.FHIRTokenType.Type) {
            fullPath.push(new treeReducer_1.FHIRToken(treeReducer_1.FHIRTokenType.Type, type));
        }
        fullPath = fullPath.concat(context.schemaPath);
    }
    else {
        if (context.token.type !== treeReducer_1.FHIRTokenType.Type) {
            fullPath.push(new treeReducer_1.FHIRToken(treeReducer_1.FHIRTokenType.Type, type));
        }
    }
    if (context.token.type === treeReducer_1.FHIRTokenType.Identifier ||
        context.token.type === treeReducer_1.FHIRTokenType.Keyword) {
        fullPath.push(context.token);
    }
    return fullPath;
}
function makePathFromContext(type, context) {
    let fullPath = [];
    if (context.schemaPath.length > 0) {
        if (context.schemaPath[0].type !== treeReducer_1.FHIRTokenType.Type) {
            fullPath.push(new treeReducer_1.FHIRToken(treeReducer_1.FHIRTokenType.Type, type));
        }
        fullPath = fullPath.concat(context.schemaPath);
    }
    else {
        fullPath.push(new treeReducer_1.FHIRToken(treeReducer_1.FHIRTokenType.Type, type));
    }
    return fullPath;
}
function enrichWithRange(object, text, range) {
    object["textEdit"] = {
        range: range,
        newText: text,
    };
}
function filterFunctionsOnType(type, functions) {
    return functions.filter((f) => {
        return ((f.onType && f.onType.has(type)) ||
            f.onType === null ||
            f.onType === undefined);
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
                    newText: newText,
                },
            };
        });
    }
    return [];
}
function constantsToOptions(currentValue, constants, range) {
    console.debug("fhirpathautocomplete.constants", typeof constants, constants);
    return constants.map((constant) => {
        let newText;
        if (currentValue.type === treeReducer_1.FHIRTokenType.ExternalConstant) {
            if (currentValue.value.startsWith("`")) {
                newText = "%`" + constant["name"] + "`";
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
                newText: newText,
            },
        };
    });
}
function functionsToOptions(functions, range) {
    return functions.map((f) => {
        return {
            label: f.name,
            kind: CompletionItemKind.Method,
            detail: f.returnType,
            textEdit: {
                range: range,
                newText: f.insertText,
            },
        };
    });
}
function getSpecMapTypes(specMap, range) {
    return Object.keys(specMap)
        .filter((k) => !k.startsWith("http"))
        .map((key) => {
        return {
            label: key,
            kind: CompletionItemKind.Class,
            detail: "Type",
            textEdit: {
                range: range,
                newText: key,
            },
        };
    });
}
function replaceKeywords(path, outerType = null) {
    if (path.length > 0) {
        if (path[0].type === treeReducer_1.FHIRTokenType.Keyword) {
            if (path[0].value === "$this") {
                if (outerType === null || outerType === undefined) {
                    return [];
                }
                else if (outerType !== "BackboneElement") {
                    path[0] = new treeReducer_1.FHIRToken(treeReducer_1.FHIRTokenType.Type, outerType);
                }
            }
            else if (path[0].value === "$index") {
                path[0] = new treeReducer_1.FHIRToken(treeReducer_1.FHIRTokenType.Type, "integer");
            }
        }
        let schemaPath = [];
        path.forEach((p) => {
            if (p.type === treeReducer_1.FHIRTokenType.Keyword) {
                if (p.value === "$index") {
                    schemaPath = [
                        new treeReducer_1.FHIRToken(treeReducer_1.FHIRTokenType.Type, "integer")
                    ];
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
function _suggest(fhirSchemas, type, forEachExpressions, externalConstants, fhirpath, cursor) {
    let schemaNode = null;
    let parentContext = null;
    let parentNode = null;
    console.debug("fhirpathautocomplete.args", `type: ${type}; forEachExpressions: ${forEachExpressions}; fhirpath: ${fhirpath}; cursor: ${cursor}`);
    let autocompleteContext = (0, treeReducer_1.reduce)(fhirpath, cursor);
    console.debug("fhirpathautocomplete.autocompleteContext", autocompleteContext);
    if (forEachExpressions.length > 0) {
        let parentExpression = forEachExpressions.join(".");
        parentContext = (0, treeReducer_1.reduce)(parentExpression, parentExpression.length + 1);
        let parentPath = makePathFromParentContext(type, parentContext);
        let parentPathWithourKeywords = replaceKeywords(parentPath, type);
        parentNode = resolvePath(fhirSchemas, parentPathWithourKeywords.map((e) => e.value));
        if (parentNode === null || parentNode === undefined) {
            return {
                isComplete: true,
                items: [],
            };
        }
        if (autocompleteContext.schemaPath.length === 0) {
            schemaNode = parentNode;
        }
        else {
            let schemaPath = autocompleteContext.schemaPath;
            let fullSchemaPath = replaceKeywords(schemaPath, parentNode["type"]);
            schemaNode =
                resolvePathFromNode(fhirSchemas, fullSchemaPath.map((e) => e.value), parentNode);
        }
    }
    else {
        let fullSchemaPath = makePathFromContext(type, autocompleteContext);
        let schemaPathWithoutKeywords = replaceKeywords(fullSchemaPath, type);
        schemaNode = resolvePath(fhirSchemas, schemaPathWithoutKeywords.map((e) => e.value));
    }
    let nodeElements = resolveElements(fhirSchemas, schemaNode);
    let scopeValue = autocompleteContext.scope.token;
    let options = [];
    switch (autocompleteContext.scope.type) {
        case treeReducer_1.ScopeType.None:
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
        case treeReducer_1.ScopeType.Function:
            console.debug("fhirautocomplete.scope.function", autocompleteContext);
            if (fhirpath_functions_1.FHIRPATH_FUNCTIONS_MAP.has(autocompleteContext.scope.token.value)) {
                let fhirpathFunction = fhirpath_functions_1.FHIRPATH_FUNCTIONS_MAP.get(autocompleteContext.scope.token.value);
                if (fhirpathFunction.parameterTypes.some((type) => type === "expression")) {
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
                else if (fhirpathFunction.parameterTypes.some((type) => type === "Type")) {
                    options = getSpecMapTypes(fhirSchemas, autocompleteContext.token.range);
                }
            }
            break;
        case treeReducer_1.ScopeType.Invocation:
            console.debug("fhirautocomplete.scope.invocation.context: ", autocompleteContext);
            let type = autocompleteContext.scope.token.type;
            if (type === treeReducer_1.FHIRTokenType.Identifier ||
                type === treeReducer_1.FHIRTokenType.Type ||
                type === treeReducer_1.FHIRTokenType.FunctionIdentifier ||
                type === treeReducer_1.FHIRTokenType.Keyword) {
                options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range));
                let functions = filterFunctionsOnType(schemaNode?.type, fhirpath_functions_1.FHIRPATH_FUNCTIONS);
                options = options.concat(functionsToOptions(functions, autocompleteContext.token.range));
            }
            break;
        case treeReducer_1.ScopeType.Literal:
            console.debug("fhirautocomplete.scope.literal");
            break;
    }
    console.debug("fhirautocomplete.token.type", autocompleteContext.token.type);
    switch (autocompleteContext.token.type) {
        case treeReducer_1.FHIRTokenType.NonTriggeringCharacter:
            options = [];
            break;
        case treeReducer_1.FHIRTokenType.Type:
            options = getSpecMapTypes(fhirSchemas, autocompleteContext.token.range);
            break;
        case treeReducer_1.FHIRTokenType.ExternalConstant:
            options = constantsToOptions(autocompleteContext.token, externalConstants, autocompleteContext.token.range);
            break;
    }
    return {
        isComplete: true,
        items: options,
    };
}
function suggest(params) {
    let fhirpath = params.fhirpath ?? "";
    return _suggest(params.fhirSchemas ?? {}, params.type, params.forEachExpressions ?? [], params.externalConstants ?? [], fhirpath, params.cursor ?? Math.max(0, fhirpath.length - 1));
}
exports.suggest = suggest;
//# sourceMappingURL=suggestion.js.map