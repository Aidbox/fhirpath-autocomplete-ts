export declare enum ScopeType {
    None = 0,
    ForEach = 1,
    Function = 2,
    Invocation = 3,
    Literal = 4
}
export declare class Scope {
    type: ScopeType;
    value: FHIRToken;
    constructor(type: ScopeType, value: FHIRToken | null);
}
export declare enum FHIRTokenType {
    Empty = 0,
    Identifier = 1,
    FunctionIdentifier = 2,
    Type = 3,
    Literal = 4,
    ExternalConstant = 5,
    NonTriggeringCharacter = 6
}
export declare class Position {
    line: number;
    character: number;
    constructor(line: number, character: number);
}
export declare class Range {
    start: Position;
    end: Position;
    constructor(start: Position, end: Position);
}
export declare class FHIRToken {
    type: FHIRTokenType;
    value: string;
    range: Range | null;
    constructor(type: FHIRTokenType, value: string | null, range?: Range | null);
}
export declare class AutocompleteContext {
    schemaPath: Array<FHIRToken>;
    token: FHIRToken | null;
    scope: Scope;
    constructor(params: Partial<AutocompleteContext>);
}
export declare function reduce(fhirpath: string, cursor: number): AutocompleteContext;
//# sourceMappingURL=treeReducer.d.ts.map