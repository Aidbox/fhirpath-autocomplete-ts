"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHIRPATH_FUNCTIONS_MAP = exports.FHIRPATH_FUNCTIONS = exports.GETREFERENCEKEY = exports.GETRESOURCEKEY = exports.HIGHBOUNDARY = exports.LOWBOUNDARY = exports.FIRST = exports.OFTYPE = exports.JOIN = exports.EXTENSION = exports.EMPTY = exports.EXISTS = exports.WHERE = exports.FhirpathFunction = void 0;
class FhirpathFunction {
    constructor(params) {
        this.name = params.name;
        this.insertText = params.insertText;
        this.parametersCount = params.parametersCount;
        this.optionalParameter = params.optionalParameter;
        this.parameterTypes = params.parameterTypes;
        this.returnType = params.returnType;
        this.onType = params.onType;
    }
}
exports.FhirpathFunction = FhirpathFunction;
exports.WHERE = new FhirpathFunction({
    name: "where",
    insertText: "where($0)",
    parametersCount: 1,
    optionalParameter: false,
    parameterTypes: ["expression"],
    returnType: "collection",
});
exports.EXISTS = new FhirpathFunction({
    name: "exists",
    insertText: "exists($0)",
    parametersCount: 1,
    optionalParameter: true,
    parameterTypes: ["expression"],
    returnType: "Boolean",
});
exports.EMPTY = new FhirpathFunction({
    name: "empty",
    insertText: "empty()",
    parametersCount: 0,
    optionalParameter: true,
    parameterTypes: [],
    returnType: "Boolean",
});
exports.EXTENSION = new FhirpathFunction({
    name: "extension",
    insertText: "extension($0)",
    parametersCount: 1,
    optionalParameter: false,
    parameterTypes: ["String"],
    returnType: "collection",
});
exports.JOIN = new FhirpathFunction({
    name: "join",
    insertText: "join($0)",
    parametersCount: 1,
    optionalParameter: true,
    parameterTypes: ["String"],
    returnType: "String",
});
exports.OFTYPE = new FhirpathFunction({
    name: "ofType",
    insertText: "ofType($0)",
    parametersCount: 1,
    optionalParameter: false,
    parameterTypes: ["Type"],
    returnType: "collection",
});
exports.FIRST = new FhirpathFunction({
    name: "first",
    insertText: "first()",
    parametersCount: 0,
    optionalParameter: true,
    parameterTypes: [],
    returnType: "collection",
});
exports.LOWBOUNDARY = new FhirpathFunction({
    name: "lowboundary",
    insertText: "lowboundary",
    parametersCount: 0,
    optionalParameter: true,
    parameterTypes: [],
    returnType: "T",
    onType: new Set([
        "decimal",
        "integer",
        "dateTime",
        "instant",
        "date",
        "time",
        "Quantity",
    ]),
});
exports.HIGHBOUNDARY = new FhirpathFunction({
    name: "highboundary",
    insertText: "highboundary",
    parametersCount: 0,
    optionalParameter: true,
    parameterTypes: [],
    returnType: "T",
    onType: new Set([
        "decimal",
        "integer",
        "dateTime",
        "instant",
        "date",
        "time",
        "Quantity",
    ]),
});
exports.GETRESOURCEKEY = new FhirpathFunction({
    name: "getResourceKey",
    insertText: "getResourceKey()",
    parametersCount: 0,
    optionalParameter: true,
    parameterTypes: [],
    returnType: "KeyType",
});
exports.GETREFERENCEKEY = new FhirpathFunction({
    name: "getReferenceKey",
    insertText: "getReferenceKey($0)",
    parametersCount: 1,
    optionalParameter: true,
    parameterTypes: [],
    returnType: "KeyType",
});
exports.FHIRPATH_FUNCTIONS = [
    exports.WHERE,
    exports.EXISTS,
    exports.EMPTY,
    exports.EXTENSION,
    exports.JOIN,
    exports.OFTYPE,
    exports.FIRST,
    exports.LOWBOUNDARY,
    exports.HIGHBOUNDARY,
    exports.GETRESOURCEKEY,
    exports.GETREFERENCEKEY,
];
exports.FHIRPATH_FUNCTIONS_MAP = new Map([
    ["where", exports.WHERE],
    ["exists", exports.EXISTS],
    ["empty", exports.EMPTY],
    ["extension", exports.EXTENSION],
    ["join", exports.JOIN],
    ["ofType", exports.OFTYPE],
    ["first", exports.FIRST],
    ["lowboundary", exports.LOWBOUNDARY],
    ["highboundary", exports.HIGHBOUNDARY],
    ["getResourceKey", exports.GETRESOURCEKEY],
    ["getReferenceKey", exports.GETREFERENCEKEY],
]);
//# sourceMappingURL=fhirpath_functions.js.map