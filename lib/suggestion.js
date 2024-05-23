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
    if (path.length > 0) {
        let currentNode = specmap[path[0].value];
        if (currentNode === null || currentNode === undefined) {
            return null;
        }
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
function makePathFromContext(type, context) {
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
function nodeToOptions(node, kind, range) {
    if (node) {
        return Object.entries(node)
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
                newText = '`' + constant["name"] + '`';
            }
            else if (currentValue.value.startsWith("'")) {
                newText = "'" + constant["name"] + "'";
            }
            else {
                newText = constant["name"];
            }
        }
        else {
            newText = constant["name"];
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
function _suggest(specmap, type, parentExpressions, constants, fhirpath, cursor) {
    var _a;
    let schemaNode = null;
    let parentContext = null;
    let parentNode = null;
    let autocompleteContext = reduce(fhirpath, cursor);
    if (parentExpressions.length > 0) {
        let parentExpression = parentExpressions.join(".");
        parentContext = reduce(parentExpression, parentExpression.length + 1);
        let parentPath = makePathFromParentContext(type, parentContext);
        let parentPathWithourKeywords = replaceKeywords(parentPath, type);
        parentNode = resolvePath(specmap, parentPathWithourKeywords);
        if (parentNode === null || parentNode === undefined) {
            return {
                isComplete: true,
                items: []
            };
        }
        let schemaPath = replaceKeywords(autocompleteContext.schemaPath, parentNode["type"]);
        console.log(parentContext);
        schemaNode = (_a = resolvePath(specmap, schemaPath)) !== null && _a !== void 0 ? _a : parentNode;
    }
    else {
        let fullSchemaPath = makePathFromContext(type, autocompleteContext);
        let schemaPathWithoutKeywords = replaceKeywords(fullSchemaPath, type);
        schemaNode = resolvePath(specmap, schemaPathWithoutKeywords);
    }
    if (schemaNode === null && schemaNode === undefined) {
        return {
            isComplete: true,
            items: []
        };
    }
    let nodeElements = resolveWhile(specmap, schemaNode, "elements");
    if (nodeElements === null && nodeElements === undefined) {
        return {
            isComplete: true,
            items: []
        };
    }
    let scopeValue = autocompleteContext.scope.token;
    let options = [];
    switch (autocompleteContext.scope.type) {
        case ScopeType.None:
            console.debug("fhirautocomplete.scope.none", autocompleteContext);
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range));
            if (parentExpressions.length > 0) {
                let thisKeyword = ThisKeyword;
                thisKeyword.detail = parentNode["type"];
                options = options.concat([thisKeyword]);
            }
            options = options.concat(constantsToOptions(autocompleteContext.token, constants, autocompleteContext.token.range));
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
                    options = options.concat(constantsToOptions(autocompleteContext.token, constants, autocompleteContext.token.range));
                }
                else if (fhirpathFunction.parameterTypes.some(type => type === "Type")) {
                    options = getSpecMapTypes(specmap, autocompleteContext.token.range);
                }
            }
            break;
        case ScopeType.Invocation:
            console.debug("fhirautocomplete.scope.invocation", autocompleteContext);
            options = options.concat(nodeToOptions(nodeElements, CompletionItemKind.Field, autocompleteContext.token.range));
            let functions = filterFunctionsOnType(schemaNode["type"], FHIRPATH_FUNCTIONS);
            options = options.concat(functionsToOptions(functions, autocompleteContext.token.range));
            break;
        case ScopeType.Literal:
            console.log('fhirautocomplete.scope.literal');
            break;
    }
    console.debug('fhirautocomplete.token.type', autocompleteContext.token.type);
    switch (autocompleteContext.token.type) {
        case FHIRTokenType.NonTriggeringCharacter:
            options = [];
            break;
        case FHIRTokenType.Type:
            options = getSpecMapTypes(specmap, autocompleteContext.token.range);
            break;
        case FHIRTokenType.ExternalConstant:
            options = constantsToOptions(autocompleteContext.token, constants, autocompleteContext.token.range);
            break;
    }
    return {
        isComplete: true,
        items: options
    };
}
export function suggest(params) {
    var _a, _b, _c, _d, _e;
    let fhirpath = (_a = params.fhirpath) !== null && _a !== void 0 ? _a : "";
    return _suggest((_b = params.fhirschemas) !== null && _b !== void 0 ? _b : {}, params.type, (_c = params.forEachExpressions) !== null && _c !== void 0 ? _c : [], (_d = params.externalConstants) !== null && _d !== void 0 ? _d : [], fhirpath, (_e = params.cursor) !== null && _e !== void 0 ? _e : Math.max(0, fhirpath.length - 1));
}
//# sourceMappingURL=suggestion.js.map