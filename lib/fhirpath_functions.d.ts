export declare class FhirpathFunction {
    name: string;
    insertText: string;
    parametersCount: number;
    optionalParameter: boolean;
    parameterTypes: Array<string>;
    returnType: string;
    onType: Set<string> | null;
    constructor(params: Partial<FhirpathFunction>);
}
export declare const WHERE: FhirpathFunction;
export declare const EXISTS: FhirpathFunction;
export declare const EMPTY: FhirpathFunction;
export declare const EXTENSION: FhirpathFunction;
export declare const JOIN: FhirpathFunction;
export declare const OFTYPE: FhirpathFunction;
export declare const FIRST: FhirpathFunction;
export declare const LOWBOUNDARY: FhirpathFunction;
export declare const HIGHBOUNDARY: FhirpathFunction;
export declare const GETRESOURCEKEY: FhirpathFunction;
export declare const GETREFERENCEKEY: FhirpathFunction;
export declare const FHIRPATH_FUNCTIONS: Array<FhirpathFunction>;
export declare const FHIRPATH_FUNCTIONS_MAP: Map<string, FhirpathFunction>;
//# sourceMappingURL=fhirpath_functions.d.ts.map