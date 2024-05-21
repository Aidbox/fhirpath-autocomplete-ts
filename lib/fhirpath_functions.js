export class FhirpathFunction {
    constructor(params) {
        this.name = params.name;
        this.insertText = params.insertText;
        this.parametersCount = params.parametersCount;
        this.optionalParamer = params.optionalParamer;
        this.parameterTypes = params.parameterTypes;
        this.returnType = params.returnType;
        this.onType = params.onType;
    }
}
export const WHERE = new FhirpathFunction({
    name: "where",
    insertText: "where($0)",
    parametersCount: 1,
    optionalParamer: false,
    parameterTypes: ["expression"],
    returnType: "collection"
});
export const EXISTS = new FhirpathFunction({
    name: "exists",
    insertText: "exists($0)",
    parametersCount: 1,
    optionalParamer: true,
    parameterTypes: ["expression"],
    returnType: "Boolean"
});
export const EMPTY = new FhirpathFunction({
    name: "empty",
    insertText: "empty()",
    parametersCount: 0,
    optionalParamer: true,
    parameterTypes: [],
    returnType: "Boolean"
});
export const EXTENSION = new FhirpathFunction({
    name: "extension",
    insertText: "extension($0)",
    parametersCount: 1,
    optionalParamer: false,
    parameterTypes: ["String"],
    returnType: "collection"
});
export const JOIN = new FhirpathFunction({
    name: "join",
    insertText: "join($0)",
    parametersCount: 1,
    optionalParamer: true,
    parameterTypes: ["String"],
    returnType: "String"
});
export const OFTYPE = new FhirpathFunction({
    name: "ofType",
    insertText: "ofType($0)",
    parametersCount: 1,
    optionalParamer: false,
    parameterTypes: ["Type"],
    returnType: "collection"
});
export const FIRST = new FhirpathFunction({
    name: "first",
    insertText: "first()",
    parametersCount: 0,
    optionalParamer: true,
    parameterTypes: [],
    returnType: "collection"
});
export const LOWBOUNDARY = new FhirpathFunction({
    name: "lowboundary",
    insertText: "lowboundary",
    parametersCount: 0,
    optionalParamer: true,
    parameterTypes: [],
    returnType: "T",
    onType: new Set(["decimal", "integer", "dateTime", "instant", "date", "time", "Quantity"])
});
export const HIGHBOUNDARY = new FhirpathFunction({
    name: "highboundary",
    insertText: "highboundary",
    parametersCount: 0,
    optionalParamer: true,
    parameterTypes: [],
    returnType: "T",
    onType: new Set(["decimal", "integer", "dateTime", "instant", "date", "time", "Quantity"])
});
export const FHIRPATH_FUNCTIONS = [
    WHERE,
    EXISTS,
    EMPTY,
    EXTENSION,
    JOIN,
    OFTYPE,
    FIRST,
    LOWBOUNDARY,
    HIGHBOUNDARY
];
export const FHIRPATH_FUNCTIONS_MAP = new Map([
    ["where", WHERE],
    ["exists", EXISTS],
    ["empty", EMPTY],
    ["extension", EXTENSION],
    ["join", JOIN],
    ["ofType", OFTYPE],
    ["first", FIRST],
    ["lowboundary", LOWBOUNDARY],
    ["highboundary", HIGHBOUNDARY]
]);
//# sourceMappingURL=fhirpath_functions.js.map