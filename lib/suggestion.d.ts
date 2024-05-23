export type CompletionItemKind = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25;
export declare function suggest(specmap: Object, type: string, parentExpressions: Array<string>, constants: Array<Object>, fhirpath: string, cursor: number): {
    isComplete: boolean;
    items: any[];
};
//# sourceMappingURL=suggestion.d.ts.map