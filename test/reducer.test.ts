import { describe, expect, test } from '@jest/globals';
import { reduce, AutocompleteContext, FHIRTokenType, ScopeType, FHIRToken, Scope, Range, Position } from '../src/treeReducer';

// function reduceAt(fhirpath: string): AutocompleteContext {
//     let cursor = fhirpath.indexOf("|")
//     let path = fhirpath.replace("|", "")
//     return reduce(path, cursor)
// }

// function AC(params: Partial<{
//     ttext: string, ttype: FHIRTokenType, token: FHIRToken | null,
//     svalue: string, stype: ScopeType, scope: Scope,
//     schemaPath: Array<FHIRToken>,
//     s: number, e: number
// }>): AutocompleteContext {
//     let token = params.token
//     let range = new Range(new Position(0, params.s ?? 0), new Position(0, params.e ?? 0))
//     if (!token) {
//         if (params.ttext !== null && params.ttext !== undefined && params.ttype !== null && params.ttype !== undefined) {
//             token = new FHIRToken(params.ttype, params.ttext, range)
//         } else if (params.ttext !== null && params.ttext !== undefined) {
//             token = new FHIRToken(FHIRTokenType.Identifier, params.ttext, range)
//         } else if (params.ttype !== null && params.ttype !== undefined) {
//             token = new FHIRToken(params.ttype, "", range)
//         }    
//     }
//     let scope = params.scope
//     if (!scope) {
//         if (params.svalue && params.stype) {
//             scope = new Scope(params.stype, params.svalue)
//         } else if (params.svalue) {
//             scope = new Scope(ScopeType.None, params.svalue)
//         } else if (params.stype) {
//             scope = new Scope(params.stype, "")
//         } else {
//             scope = new Scope(ScopeType.None, null)
//         }    
//     }

//     return new AutocompleteContext({
//         token: token ?? null, 
//         scope: scope, 
//         schemaPath: params.schemaPath ?? [],
//     })
// }

// function JAC(params: Partial<{
//     ttext: string, ttype: FHIRTokenType, token: FHIRToken | null,
//     svalue: string, stype: ScopeType, scope: Scope,
//     schemaPath: Array<FHIRToken>,
//     s: number, e: number
// }>) : string {
//     return JSON.stringify(AC(params)).replace("\n", "")
// }

// function T(text: string | null = null, type: FHIRTokenType | null = null, s: number | null = null, e: number | null = null) : FHIRToken {
//     let range : Range | null = null
//     if (s !== null && s !== undefined && e !== null && e !== undefined) {
//         range = new Range(new Position(0, s), new Position(0, e))
//     }    
//     return new FHIRToken(type ?? FHIRTokenType.Identifier, text ?? null, range)
// }

// describe('expression', () => {
//     describe('term', () => {
//         describe('invocation', () => {
//             describe('identifier', () => {
//                 describe('IDENTIFIER', () => {
//                     test('"|name"', () => {
//                         expect(JSON.stringify(reduceAt("|name"))).toEqual(JAC({ ttext: "name", s: 0, e: 4 }));
//                     })
//                     test('"na|me"', () => {
//                         expect(JSON.stringify(reduceAt("na|me"))).toEqual(JAC({ ttext: "name", s: 0, e: 4 }));
//                     })
//                     test('"name|"', () => {
//                         expect(JSON.stringify(reduceAt("name|"))).toEqual(JAC({ ttext: "name", s: 0, e: 4 }));
//                     })
//                 })
//                 describe('DELIMITEDIDENTIFIER', () => {
//                     test('"|`name`"', () => {
//                         expect(JSON.stringify(reduceAt("|`name`"))).toEqual(JAC({ ttext: "`name`", s: 0, e: 6 }));
//                     })
//                     test('"`|name`"', () => {
//                         expect(JSON.stringify(reduceAt("`|name`"))).toEqual(JAC({ ttext: "`name`", s: 0, e: 6 }));
//                     })
//                     test('"`name|`"', () => {
//                         expect(JSON.stringify(reduceAt("`name|`"))).toEqual(JAC({ ttext: "`name`", s: 0, e: 6 }));
//                     })
//                     test('"`name`|"', () => {
//                         expect(JSON.stringify(reduceAt("`name`|"))).toEqual(JAC({ ttext: "`name`", s: 0, e: 6 }));
//                     })
//                 })
//                 describe('SPECIAL', () => {
//                     test('"as"', () => {
//                         expect(JSON.stringify(reduceAt("|as"))).toEqual(JAC({ ttext: "as", s: 0, e: 2 }));
//                     })
//                     test('"contains"', () => {
//                         expect(JSON.stringify(reduceAt("|contains"))).toEqual(JAC({ ttext: "contains", s: 0, e: 8 }));
//                     })
//                     test('"in"', () => {
//                         expect(JSON.stringify(reduceAt("|in"))).toEqual(JAC({ ttext: "in", s: 0, e: 2 }));
//                     })
//                     test('"is"', () => {
//                         expect(JSON.stringify(reduceAt("|is"))).toEqual(JAC({ ttext: "is", s: 0, e: 2 }));
//                     })
//                 })
//             })
//             describe('function', () => {
//                     test('"|a.where(b)"', () => {
//                         expect(JSON.stringify(reduceAt("|a.where(b)")))
//                             .toEqual(JAC({ ttext: "a", s: 0, e: 1 }));
//                     })
//                     test('"a|.where(b)"', () => {
//                         expect(JSON.stringify(reduceAt("a|.where(b)")))
//                             .toEqual(JAC({ ttext: "a", s: 0, e: 1 }));
//                     })
//                     test('"a.|where(b)"', () => {
//                         expect(JSON.stringify(reduceAt("a.|where(b)")))
//                             .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "a", ttext: "where", s: 2, e: 7, schemaPath: [T("a")] }));
//                     })
//                     test('"a.where|(b)"', () => {
//                         expect(JSON.stringify(reduceAt("a.where|(b)")))
//                             .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "a", ttext: "where", s: 2, e: 7, schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(|b)"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(|b)")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "b", s: 8, e: 9, schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(|)"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(|)")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttype: FHIRTokenType.Empty, s: 8, e: 8, ttext: "", schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(b|)"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(b|)")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "b", s: 8, e: 9, schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(b)|"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(b)|")))
//                             .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "a", ttext: ")", ttype: FHIRTokenType.NonTriggeringCharacter, s: 10, e: 10, schemaPath: [T("a")] }));
//                     })
//                 describe('nested function invocation', () => {
//                     test('"a.where(b|.where(c))"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(b|.where(c))")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "b", s: 9, e: 9, schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(b.where|(c))"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(b.where|(c))")))
//                             .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "b", ttext: "where", s: 10, e: 15, schemaPath: [T("a"), T("b")] }));
//                     })
//                     test('"a.where(b.where(|c))"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(b.where(|c))")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "c", s: 16, e: 17, schemaPath: [T("a"), T("b")] }));
//                     })
//                     test('"a.where(b.where(c|))"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(b.where(|c))")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "c", s: 16, e: 17, schemaPath: [T("a"), T("b")] }));
//                     })
//                     test('"a.where(b.where(c)|)"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(b.where(c)|)")))
//                             .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "b", ttext: ")", s: 18, e: 18, ttype: FHIRTokenType.NonTriggeringCharacter, schemaPath: [T("a"), T("b")] }));
//                     })
//                 })
//                 describe('partial function invocation', () => {
//                     test('"|a.where("', () => {
//                         expect(JSON.stringify(reduceAt("|a.where(")))
//                             .toEqual(JAC({ ttext: "a", s: 0, e: 1 }));
//                     })
//                     test('"a|.where("', () => {
//                         expect(JSON.stringify(reduceAt("a|.where(")))
//                             .toEqual(JAC({ ttext: "a", s: 0, e: 1 }));
//                     })
//                     test('"a.|where("', () => {
//                         expect(JSON.stringify(reduceAt("a.|where(")))
//                             .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "a", ttext: "where", s: 2, e: 7, schemaPath: [T("a")] }));
//                     })
//                     test('"a.where|("', () => {
//                         expect(JSON.stringify(reduceAt("a.where|(")))
//                             .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "a", ttext: "where", s: 2, e: 7, schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(|"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(|")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", s: 8, e: 8, schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(|b"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(|b")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "b", s: 8, e: 9, schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(b|"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(b|)")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "b", s: 8, e: 9, schemaPath: [T("a")] }));
//                     })
//                 })
//                 describe('paramsList', () => {
//                     test('"a.where(b|)"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(b|)")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "b", schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(c, b|)"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(c, b|)")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "b", schemaPath: [T("a")] }));
//                     })
//                     test('"a.where(c, b|"', () => {
//                         expect(JSON.stringify(reduceAt("a.where(c, b|")))
//                             .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "b", schemaPath: [T("a")] }));
//                     })
//                     describe('first argument doesn`t affect second', () => {
//                         test('"a.where(c.select($this as Patient), b|)"', () => {
//                             expect(JSON.stringify(reduceAt("a.where(c.select($this as Patient), b|)")))
//                                 .toEqual(JAC({ stype: ScopeType.Function, svalue: "where", ttext: "b", schemaPath: [T("a")] }));
//                         })
//                     })
//                 })
//             })
//             describe('SPECIAL', () => {
//                 test('"$this"', () => {
//                     expect(JSON.stringify(reduceAt("$this|")))
//                         .toEqual(JAC({ ttext: "$this" }));
//                 })
//                 test('"$index"', () => {
//                     expect(JSON.stringify(reduceAt("$index|")))
//                         .toEqual(JAC({ ttext: "$index" }));
//                 })
//                 test('"$total"', () => {
//                     expect(JSON.stringify(reduceAt("$total|")))
//                         .toEqual(JAC({ ttext: "$total" }));
//                 })
//             })
//         })
//         describe('literal', () => {
//             describe('empty', () => {
//                 test('"|{}"', () => {
//                     expect(JSON.stringify(reduceAt("|{}")))
//                         .toEqual(JAC({ ttext: "{}", ttype: FHIRTokenType.Literal }));
//                 })
//                 test('"{|}"', () => {
//                     expect(JSON.stringify(reduceAt("{|}")))
//                         .toEqual(JAC({ ttext: "{}", ttype: FHIRTokenType.Literal }));
//                 })
//                 test('"{}|"', () => {
//                     expect(JSON.stringify(reduceAt("{}|")))
//                         .toEqual(JAC({ ttext: "{}", ttype: FHIRTokenType.Literal }));
//                 })
//             })
//             describe('boolean', () => {
//                 test('"true|"', () => {
//                     expect(JSON.stringify(reduceAt("true|")))
//                         .toEqual(JAC({ ttext: "true", ttype: FHIRTokenType.Literal }));
//                 })
//                 test('"false|"', () => {
//                     expect(JSON.stringify(reduceAt("false|")))
//                         .toEqual(JAC({ ttext: "false", ttype: FHIRTokenType.Literal }));
//                 })
//             })
//             describe('STRING', () => {
//                 test("'|'", () => {
//                     expect(JSON.stringify(reduceAt("false|")))
//                         .toEqual(JAC({ ttext: "false", ttype: FHIRTokenType.Literal }));
//                 })
//                 test("'a'|", () => {
//                     expect(JSON.stringify(reduceAt("'a'|")))
//                         .toEqual(JAC({ ttext: "'a'", ttype: FHIRTokenType.Literal }));
//                 })
//                 test("'a|", () => {
//                     expect(JSON.stringify(reduceAt("'a|")))
//                         .toEqual(JAC({ ttext: "'a", ttype: FHIRTokenType.Literal }));
//                 })
//                 test("a.where('Patient'|)", () => {
//                     expect(JSON.stringify(reduceAt("a.where('Patient'|)")))
//                         .toEqual(JAC({ ttext: "'Patient'", ttype: FHIRTokenType.Literal, stype: ScopeType.Function, svalue: "where", schemaPath: [T("a")] }));
//                 })
//             })
//             describe('NUMBER', () => {
//                 test("0|", () => {
//                     expect(JSON.stringify(reduceAt("0|")))
//                         .toEqual(JAC({ ttext: "0", ttype: FHIRTokenType.Literal }));
//                 })
//             })
//             describe('DATETIME', () => {
//                 test("@|", () => {
//                     expect(JSON.stringify(reduceAt("@|")))
//                         .toEqual(JAC({ ttext: "@", ttype: FHIRTokenType.Literal }));
//                 })
//                 test("@2000|", () => {
//                     expect(JSON.stringify(reduceAt("@2000|")))
//                         .toEqual(JAC({ ttext: "@2000", ttype: FHIRTokenType.Literal }));
//                 })
//             })
//             describe('TIME', () => {
//                 test("@T|", () => {
//                     expect(JSON.stringify(reduceAt("@T|")))
//                         .toEqual(JAC({ token: null }));
//                 })
//                 test("@T20|", () => {
//                     expect(JSON.stringify(reduceAt("@T20|")))
//                         .toEqual(JAC({ ttext: "@T20", ttype: FHIRTokenType.Literal }));
//                 })
//             })
//             describe('quantity', () => {
//                 test("20.12|", () => {
//                     expect(JSON.stringify(reduceAt("20.12|")))
//                         .toEqual(JAC({ ttext: "20.12", ttype: FHIRTokenType.Literal }));
//                 })
//                 test("4 days|", () => {
//                     expect(JSON.stringify(reduceAt("4 days|")))
//                         .toEqual(JAC({ ttext: "4days", ttype: FHIRTokenType.Literal }));
//                 })
//             })
//         })
//         describe('externalConstant', () => {
//             test("%|", () => {
//                 expect(JSON.stringify(reduceAt("%|")))
//                     .toEqual(JAC({ ttext: "", ttype: FHIRTokenType.ExternalConstant }));
//             })
//             test("%a|", () => {
//                 expect(JSON.stringify(reduceAt("%a|")))
//                     .toEqual(JAC({ ttext: "a", ttype: FHIRTokenType.ExternalConstant }));
//             })
//             test("%`a`|", () => {
//                 expect(JSON.stringify(reduceAt("%`a`|")))
//                     .toEqual(JAC({ ttext: "`a`", ttype: FHIRTokenType.ExternalConstant }));
//             })
//             test("%`a|", () => {
//                 expect(JSON.stringify(reduceAt("%`a|")))
//                     .toEqual(JAC({ ttext: "`a", ttype: FHIRTokenType.ExternalConstant }));
//             })
//             test("%'a'|", () => {
//                 expect(JSON.stringify(reduceAt("%'a'|")))
//                     .toEqual(JAC({ ttext: "'a'", ttype: FHIRTokenType.ExternalConstant }));
//             })
//             test("%'a|", () => {
//                 expect(JSON.stringify(reduceAt("%'a|")))
//                     .toEqual(JAC({ ttext: "'a", ttype: FHIRTokenType.ExternalConstant }));
//             })
//         })
//         describe('parenthesized', () => {
//             test("|()", () => {
//                 expect(JSON.stringify(reduceAt("|()")))
//                     .toEqual(JAC({ ttext: "", ttype: FHIRTokenType.Empty }));
//             })
//             test("(|)", () => {
//                 expect(JSON.stringify(reduceAt("(|)")))
//                     .toEqual(JAC({ ttext: "", ttype: FHIRTokenType.Empty }));
//             })
//             test("(name|)", () => {
//                 expect(JSON.stringify(reduceAt("(name|)")))
//                     .toEqual(JAC({ ttext: "name", ttype: FHIRTokenType.Identifier }));
//             })
//             test("(name).|", () => {
//                 expect(JSON.stringify(reduceAt("(name).|")))
//                     .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "name", ttext: "", ttype: FHIRTokenType.Empty, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
//             })
//             test("(name|", () => {
//                 expect(JSON.stringify(reduceAt("(name|")))
//                     .toEqual(JAC({ ttext: "name", ttype: FHIRTokenType.Identifier }));
//             })
//             test("('name|", () => {
//                 expect(JSON.stringify(reduceAt("('name|")))
//                     .toEqual(JAC({ ttext: "'name", ttype: FHIRTokenType.Literal }));
//             })
//             test("()|", () => {
//                 expect(JSON.stringify(reduceAt("()|")))
//                     .toEqual(JAC({ ttext: ")", ttype: FHIRTokenType.NonTriggeringCharacter }));
//             })
//         })
//     })
//     describe('invocation', () => {
//         describe('one invocation', () => {
//             test('"|a.b"', () => {
//                 expect(JSON.stringify(reduceAt("|a.b"))).toEqual(JAC({ttext: "a"}));
//             })
//             test('"a|.b"', () => {
//                 expect(JSON.stringify(reduceAt("a|.b"))).toEqual(JAC({ttext: "a"}));
//             })
//             test('"a.|b"', () => {
//                 expect(JSON.stringify(reduceAt("a.|b"))).toEqual(JAC({ttext: "b", stype: ScopeType.Invocation, svalue: "a", schemaPath: [T("a")]}));
//             })
//             test('"a.b|"', () => {
//                 expect(JSON.stringify(reduceAt("a.b|"))).toEqual(JAC({ttext: "b", stype: ScopeType.Invocation, svalue: "a", schemaPath: [T("a")]}));
//             })
//         })
//         describe('two invocations', () => {
//             test('"|a.b.c"', () => {
//                 expect(JSON.stringify(reduceAt("|a.b.c"))).toEqual(JAC({ttext: "a"}));
//             })
//             test('"a|.b.c"', () => {
//                 expect(JSON.stringify(reduceAt("a|.b.c"))).toEqual(JAC({ttext: "a"}));
//             })
//             test('"a.|b.c"', () => {
//                 expect(JSON.stringify(reduceAt("a.|b.c"))).toEqual(JAC({ttext: "b", stype: ScopeType.Invocation, svalue: "a", schemaPath: [T("a")]}));
//             })
//             test('"a.b|.c"', () => {
//                 expect(JSON.stringify(reduceAt("a.b|.c"))).toEqual(JAC({ttext: "b", stype: ScopeType.Invocation, svalue: "a", schemaPath: [T("a")]}));
//             })
//             test('"a.b.|c"', () => {
//                 expect(JSON.stringify(reduceAt("a.b.|c"))).toEqual(JAC({ttext: "c", stype: ScopeType.Invocation, svalue: "b", schemaPath: [T("a"), T("b")]}));
//             })
//             test('"a.b.c|"', () => {
//                 expect(JSON.stringify(reduceAt("a.b.c|"))).toEqual(JAC({ttext: "c", stype: ScopeType.Invocation, svalue: "b", schemaPath: [T("a"), T("b")]}));
//             })
//         })
//         describe('partial invocation', () => {
//             test('"|a."', () => {
//                 expect(JSON.stringify(reduceAt("|a.")))
//                     .toEqual(JAC({ttext: "a"}));
//             })
//             test('"a|."', () => {
//                 expect(JSON.stringify(reduceAt("a|.")))
//                     .toEqual(JAC({ttext: "a"}));
//             })
//             test('"a.|"', () => {
//                 expect(JSON.stringify(reduceAt("a.|")))
//                     .toEqual(JAC({stype: ScopeType.Invocation, svalue: "a", token: T("", FHIRTokenType.Empty), schemaPath: [T("a")]}));
//             })
//             test('"a.|b."', () => {
//                 expect(JSON.stringify(reduceAt("a.|b.")))
//                     .toEqual(JAC({stype: ScopeType.Invocation, svalue: "a", ttext: "b", schemaPath: [T("a")]}));
//             })
//             test('"a.b|."', () => {
//                 expect(JSON.stringify(reduceAt("a.b|.")))
//                     .toEqual(JAC({stype: ScopeType.Invocation, svalue: "a", ttext: "b", schemaPath: [T("a")]}));
//             })
//             test('"a.b.|"', () => {
//                 expect(JSON.stringify(reduceAt("a.b.|")))
//                     .toEqual(JAC({stype: ScopeType.Invocation, svalue: "b", token: T("", FHIRTokenType.Empty), schemaPath: [T("a"), T("b")]}));
//             })
//             test('"a.b.|c."', () => {
//                 expect(JSON.stringify(reduceAt("a.b.|c.")))
//                     .toEqual(JAC({stype: ScopeType.Invocation, svalue: "b", ttext: "c", schemaPath: [T("a"), T("b")]}));
//             })
//             test('"a.b.c|."', () => {
//                 expect(JSON.stringify(reduceAt("a.b.c|.")))
//                     .toEqual(JAC({stype: ScopeType.Invocation, svalue: "b", ttext: "c", schemaPath: [T("a"), T("b")]}));
//             })
//             test('"a.b.c.|"', () => {
//                 expect(JSON.stringify(reduceAt("a.b.c.|")))
//                     .toEqual(JAC({stype: ScopeType.Invocation, svalue: "c", token: T("", FHIRTokenType.Empty), schemaPath: [T("a"), T("b"), T("c")]}));
//             })
//         })
//     });
//     describe('indexing', () => {
//         test('"|name[0]"', () => {
//             expect(JSON.stringify(reduceAt("|name[0]")))
//                 .toEqual(JAC({ ttext: "name", ttype: FHIRTokenType.Identifier }));
//         })
//         test('"name|[0]"', () => {
//             expect(JSON.stringify(reduceAt("name|[0]")))
//                 .toEqual(JAC({ ttext: "name", ttype: FHIRTokenType.Identifier }));
//         })
//         test('"name[|0]"', () => {
//             expect(JSON.stringify(reduceAt("name[|0]")))
//                 .toEqual(JAC({ ttext: "0", ttype: FHIRTokenType.Literal, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
//         })
//         test('"name[|"', () => {
//             expect(JSON.stringify(reduceAt("name[|")))
//                 .toEqual(JAC({ ttext: "", ttype: FHIRTokenType.Empty, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
//         })
//         test('"name[0|"', () => {
//             expect(JSON.stringify(reduceAt("name[0|")))
//                 .toEqual(JAC({ ttext: "0", ttype: FHIRTokenType.Literal, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
//         })
//         test('"name[0|]"', () => {
//             expect(JSON.stringify(reduceAt("name[0|]")))
//                 .toEqual(JAC({ ttext: "0", ttype: FHIRTokenType.Literal, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
//         })
//         test('"name[0]|"', () => {
//             expect(JSON.stringify(reduceAt("name[0]|")))
//                 .toEqual(JAC({ ttext: "]", ttype: FHIRTokenType.NonTriggeringCharacter, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
//         })
//         test('"name[Patient]|"', () => {
//             expect(JSON.stringify(reduceAt("name[Patient]|")))
//                 .toEqual(JAC({ ttext: "]", ttype: FHIRTokenType.NonTriggeringCharacter, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
//         })
//         test('"(Patient)[|0]"', () => {
//             expect(JSON.stringify(reduceAt("(Patient)[|0]")))
//                 .toEqual(JAC({ ttext: "0", ttype: FHIRTokenType.Literal, schemaPath: [T("Patient", FHIRTokenType.Type)] }));
//         })
//         test('"(Patient)[0]|"', () => {
//             expect(JSON.stringify(reduceAt("(Patient)[0]|")))
//                 .toEqual(JAC({ ttext: "]", ttype: FHIRTokenType.NonTriggeringCharacter, schemaPath: [T("Patient", FHIRTokenType.Type)] }));
//         })
//     })
//     describe('is,as', () => {
//         test('"name| is String"', () => {
//             expect(JSON.stringify(reduceAt("name| is String")))
//                 .toEqual(JAC({ ttext: "name", ttype: FHIRTokenType.Identifier }));
//         })
//         // TODO: Broken case
//         test('"| is String"', () => {
//             expect(JSON.stringify(reduceAt("| is String")))
//                 .toEqual(JAC({ ttext: "is", ttype: FHIRTokenType.Identifier }));
//         })
//         test('"name is| String"', () => {
//             expect(JSON.stringify(reduceAt("name is| String")))
//                 .toEqual(JAC({ ttext: "is", ttype: FHIRTokenType.NonTriggeringCharacter }));
//         })
//         test('"name is String|"', () => {
//             expect(JSON.stringify(reduceAt("name is String|")))
//                 .toEqual(JAC({ ttext: "String", ttype: FHIRTokenType.Type }));
//         })
//         test('"name is |"', () => {
//             expect(JSON.stringify(reduceAt("name is |")))
//                 .toEqual(JAC({ ttext: "", ttype: FHIRTokenType.Empty }));
//         })
//         test('"(name as String).|"', () => {
//             expect(JSON.stringify(reduceAt("(name as String).|")))
//                 .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "String", ttext: "", ttype: FHIRTokenType.Empty, schemaPath: [T("String", FHIRTokenType.Type)] }));
//         })
//         test('"(name is String).|"', () => {
//             expect(JSON.stringify(reduceAt("(name is String).|")))
//                 .toEqual(JAC({ stype: ScopeType.Invocation, svalue: "Boolean", ttext: "", ttype: FHIRTokenType.Empty, schemaPath: [T("Boolean", FHIRTokenType.Type)] }));
//         })
//     })
// });