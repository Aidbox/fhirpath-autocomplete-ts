import { describe, expect, test } from '@jest/globals';
import { reduce, AutocompleteContext, FHIRTokenType, ScopeType, FHIRToken, Scope, Range, Position } from '../src/treeReducer';

function reduceAt(fhirpath: string): AutocompleteContext {
    let cursor = fhirpath.indexOf("|")
    let path = fhirpath.replace("|", "")
    return reduce(path, cursor)
}

function AC(params: Partial<{
    ttext: string, ttype: FHIRTokenType, token: FHIRToken | null,
    svalue: FHIRToken, stype: ScopeType, scope: Scope,
    schemaPath: Array<FHIRToken>,
    s: number, e: number
}>): AutocompleteContext {
    let token = params.token
    let range = new Range(new Position(0, params.s ?? 0), new Position(0, params.e ?? 0))
    if (!token) {
        if (params.ttext !== null && params.ttext !== undefined && params.ttype !== null && params.ttype !== undefined) {
            token = new FHIRToken(params.ttype, params.ttext, range)
        } else if (params.ttext !== null && params.ttext !== undefined) {
            token = new FHIRToken(FHIRTokenType.Identifier, params.ttext, range)
        } else if (params.ttype !== null && params.ttype !== undefined) {
            token = new FHIRToken(params.ttype, "", range)
        }    
    }
    let scope = params.scope
    if (!scope) {
        if (params.svalue && params.stype) {
            scope = new Scope(params.stype, params.svalue)
        } else if (params.svalue) {
            scope = new Scope(ScopeType.None, params.svalue)
        } else if (params.stype) {
            scope = new Scope(params.stype, T(""))
        } else {
            scope = new Scope(ScopeType.None, null)
        }    
    }

    return new AutocompleteContext({
        token: token ?? null, 
        scope: scope, 
        schemaPath: params.schemaPath ?? [],
    })
}

function JAC(params: Partial<{
    ttext: string, ttype: FHIRTokenType, token: FHIRToken | null,
    svalue: FHIRToken, stype: ScopeType, scope: Scope,
    schemaPath: Array<FHIRToken>,
    s: number, e: number
}>) : string {
    return JSON.stringify(AC(params)).replace("\n", "")
}

function T(text: string | null = null, type: FHIRTokenType | null = null, s: number | null = null, e: number | null = null) : FHIRToken {
    let range : Range | null = null
    if (s !== null && s !== undefined && e !== null && e !== undefined) {
        range = new Range(new Position(0, s), new Position(0, e))
    }    
    return new FHIRToken(type ?? FHIRTokenType.Identifier, text ?? null, range)
}

describe('expression', () => {
    describe('term', () => {
        describe('invocation', () => {
            describe('identifier', () => {
                describe('IDENTIFIER', () => {
                    test('"|name"', () => {
                        expect(JSON.stringify(reduceAt("|name"))).toEqual(JAC({ ttext: "name", s: 0, e: 4 }));
                    })
                    test('"na|me"', () => {
                        expect(JSON.stringify(reduceAt("na|me"))).toEqual(JAC({ ttext: "name", s: 0, e: 4 }));
                    })
                    test('"name|"', () => {
                        expect(JSON.stringify(reduceAt("name|"))).toEqual(JAC({ ttext: "name", s: 0, e: 4 }));
                    })
                })
                describe('DELIMITEDIDENTIFIER', () => {
                    test('"|`name`"', () => {
                        expect(JSON.stringify(reduceAt("|`name`")))
                            .toEqual(JAC({ ttext: "`name`", s: 0, e: 6 }));
                    })
                    test('"`|name`"', () => {
                        expect(JSON.stringify(reduceAt("`|name`")))
                            .toEqual(JAC({ ttext: "`name`", s: 0, e: 6 }));
                    })
                    test('"`name|`"', () => {
                        expect(JSON.stringify(reduceAt("`name|`")))
                            .toEqual(JAC({ ttext: "`name`", s: 0, e: 6 }));
                    })
                    test('"`name`|"', () => {
                        expect(JSON.stringify(reduceAt("`name`|")))
                            .toEqual(JAC({ ttext: "`name`", s: 0, e: 6 }));
                    })
                })
                describe('SPECIAL', () => {
                    test('"as"', () => {
                        expect(JSON.stringify(reduceAt("|as")))
                        .toEqual(JAC({ ttext: "as", s: 0, e: 2 }));
                    })
                    test('"contains"', () => {
                        expect(JSON.stringify(reduceAt("|contains")))
                        .toEqual(JAC({ ttext: "contains", s: 0, e: 8 }));
                    })
                    test('"in"', () => {
                        expect(JSON.stringify(reduceAt("|in")))
                        .toEqual(JAC({ ttext: "in", s: 0, e: 2 }));
                    })
                    test('"is"', () => {
                        expect(JSON.stringify(reduceAt("|is")))
                        .toEqual(JAC({ ttext: "is", s: 0, e: 2 }));
                    })
                })
            })
            describe('function', () => {
                    test('"|a.where(b)"', () => {
                        expect(JSON.stringify(reduceAt("|a.where(b)")))
                            .toEqual(JAC({ ttext: "a", s: 0, e: 1 }));
                    })
                    test('"a|.where(b)"', () => {
                        expect(JSON.stringify(reduceAt("a|.where(b)")))
                            .toEqual(JAC({ ttext: "a", s: 0, e: 1 }));
                    })
                    test('"a.|where(b)"', () => {
                        expect(JSON.stringify(reduceAt("a.|where(b)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Invocation, 
                                svalue: T("a", FHIRTokenType.Identifier, 0, 1), 
                                token: T("where", FHIRTokenType.FunctionIdentifier, 2, 7),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where|(b)"', () => {
                        expect(JSON.stringify(reduceAt("a.where|(b)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Invocation, 
                                svalue: T("a", FHIRTokenType.Identifier, 0, 1), 
                                token: T("where", FHIRTokenType.FunctionIdentifier, 2, 7),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(|b)"', () => {
                        expect(JSON.stringify(reduceAt("a.where(|b)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("b", FHIRTokenType.Identifier, 8, 9),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(|)"', () => {
                        expect(JSON.stringify(reduceAt("a.where(|)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("", FHIRTokenType.Empty, 8, 8),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(b|)"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b|)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("b", FHIRTokenType.Identifier, 8, 9),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(b = |)"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b = |)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("", FHIRTokenType.Empty, 12, 12),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(b)|"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b)|")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Invocation, 
                                svalue: T("a", FHIRTokenType.Identifier, 0, 1), 
                                token: T(")", FHIRTokenType.NonTriggeringCharacter, 10, 10),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                describe('nested function invocation', () => {
                    test('"a.where(b|.where(c))"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b|.where(c))")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("b", FHIRTokenType.Identifier, 8, 9),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(b.where|(c))"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b.where|(c))")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Invocation, 
                                svalue: T("b", FHIRTokenType.Identifier, 8, 9), 
                                token: T("where", FHIRTokenType.FunctionIdentifier, 10, 15),
                                schemaPath: [
                                    T("a", FHIRTokenType.Identifier, 0, 1),
                                    T("b", FHIRTokenType.Identifier, 8, 9)
                                ] 
                            }));
                    })
                    test('"a.where(b.where(|c))"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b.where(|c))")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 10, 15), 
                                token: T("c", FHIRTokenType.Identifier, 16, 17),
                                schemaPath: [
                                    T("a", FHIRTokenType.Identifier, 0, 1),
                                    T("b", FHIRTokenType.Identifier, 8, 9)
                                ] 
                            }));
                    })
                    test('"a.where(b.where(c|))"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b.where(|c))")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 10, 15), 
                                token: T("c", FHIRTokenType.Identifier, 16, 17),
                                schemaPath: [
                                    T("a", FHIRTokenType.Identifier, 0, 1),
                                    T("b", FHIRTokenType.Identifier, 8, 9)
                                ] 
                            }));
                    })
                    test('"a.where(b.where(c)|)"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b.where(c)|)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Invocation, 
                                svalue: T("b", FHIRTokenType.Identifier, 8, 9), 
                                token: T(")", FHIRTokenType.NonTriggeringCharacter, 18, 18),
                                schemaPath: [
                                    T("a", FHIRTokenType.Identifier, 0, 1),
                                    T("b", FHIRTokenType.Identifier, 8, 9)
                                ] 
                            }));
                    })
                })
                describe('partial function invocation', () => {
                    test('"|a.where("', () => {
                        expect(JSON.stringify(reduceAt("|a.where(")))
                            .toEqual(JAC({ ttext: "a", s: 0, e: 1 }));
                    })
                    test('"a|.where("', () => {
                        expect(JSON.stringify(reduceAt("a|.where(")))
                            .toEqual(JAC({ ttext: "a", s: 0, e: 1 }));
                    })
                    test('"a.|where("', () => {
                        expect(JSON.stringify(reduceAt("a.|where(")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Invocation, 
                                svalue: T("a", FHIRTokenType.Identifier, 0, 1), 
                                token: T("where", FHIRTokenType.FunctionIdentifier, 2, 7),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where|("', () => {
                        expect(JSON.stringify(reduceAt("a.where|(")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Invocation, 
                                svalue: T("a", FHIRTokenType.Identifier, 0, 1), 
                                token: T("where", FHIRTokenType.FunctionIdentifier, 2, 7),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(|"', () => {
                        expect(JSON.stringify(reduceAt("a.where(|")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("", FHIRTokenType.Empty, 8, 8),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(|b"', () => {
                        expect(JSON.stringify(reduceAt("a.where(|b")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("b", FHIRTokenType.Identifier, 8, 9),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(b|"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b|)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("b", FHIRTokenType.Identifier, 8, 9),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                })
                describe('paramsList', () => {
                    test('"a.where(b|)"', () => {
                        expect(JSON.stringify(reduceAt("a.where(b|)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("b", FHIRTokenType.Identifier, 8, 9),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(c, b|)"', () => {
                        expect(JSON.stringify(reduceAt("a.where(c, b|)")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("b", FHIRTokenType.Identifier, 11, 12),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    test('"a.where(c, b|"', () => {
                        expect(JSON.stringify(reduceAt("a.where(c, b|")))
                            .toEqual(JAC({ 
                                stype: ScopeType.Function, 
                                svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7), 
                                token: T("b", FHIRTokenType.Identifier, 11, 12),
                                schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)] 
                            }));
                    })
                    describe('first argument doesn`t affect second', () => {
                        test('"a.where(c.select($this as Patient), b|)"', () => {
                            expect(JSON.stringify(reduceAt("a.where(c.select($this as Patient), b|)")))
                                .toEqual(JAC({
                                    stype: ScopeType.Function,
                                    svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7),
                                    token: T("b", FHIRTokenType.Identifier, 36, 37),
                                    schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)]
                                }));
                        })
                    })
                })
            })
            describe('SPECIAL', () => {
                test('"$this"', () => {
                    expect(JSON.stringify(reduceAt("$this|")))
                        .toEqual(JAC({ ttext: "$this", ttype: FHIRTokenType.Keyword, s: 0, e: 5 }));
                })
                test('"$index"', () => {
                    expect(JSON.stringify(reduceAt("$index|")))
                        .toEqual(JAC({ ttext: "$index", ttype: FHIRTokenType.Keyword, s: 0, e: 6 }));
                })
                test('"$total"', () => {
                    expect(JSON.stringify(reduceAt("$total|")))
                        .toEqual(JAC({ ttext: "$total", ttype: FHIRTokenType.Keyword, s:0, e: 6 }));
                })
            })
        })
        describe('literal', () => {
            describe('empty', () => {
                test('"|{}"', () => {
                    expect(JSON.stringify(reduceAt("|{}")))
                        .toEqual(JAC({ 
                            token: T("{}", FHIRTokenType.Literal, 0, 2) 
                        }));
                })
                test('"{|}"', () => {
                    expect(JSON.stringify(reduceAt("{|}")))
                        .toEqual(JAC({ 
                            token: T("{}", FHIRTokenType.Literal, 0, 2) 
                        }));
                })
                test('"{}|"', () => {
                    expect(JSON.stringify(reduceAt("{}|")))
                        .toEqual(JAC({ 
                            token: T("{}", FHIRTokenType.Literal, 0, 2) 
                        }));
                })
            })
            describe('boolean', () => {
                test('"true|"', () => {
                    expect(JSON.stringify(reduceAt("true|")))
                        .toEqual(JAC({ 
                            token: T("true", FHIRTokenType.Literal, 0, 4) 
                        }));
                })
                test('"false|"', () => {
                    expect(JSON.stringify(reduceAt("false|")))
                        .toEqual(JAC({ 
                            token: T("false", FHIRTokenType.Literal, 0, 5) 
                        }));
                })
            })
            describe('STRING', () => {
                test("'|'", () => {
                    expect(JSON.stringify(reduceAt("'|'")))
                        .toEqual(JAC({ 
                            token: T("''", FHIRTokenType.Literal, 0, 2) 
                        }));
                })
                test("'a'|", () => {
                    expect(JSON.stringify(reduceAt("'a'|")))
                        .toEqual(JAC({ 
                            token: T("'a'", FHIRTokenType.Literal, 0, 3) 
                        }));
                })
                test("'a|", () => {
                    expect(JSON.stringify(reduceAt("'a|")))
                        .toEqual(JAC({ 
                            token: T("'a", FHIRTokenType.Literal, 0, 2) 
                        }));
                })
                test("a.where('Patient'|)", () => {
                    expect(JSON.stringify(reduceAt("a.where('Patient'|)")))
                        .toEqual(JAC({ 
                            stype: ScopeType.Function,
                            svalue: T("where", FHIRTokenType.FunctionIdentifier, 2, 7),
                            token: T("'Patient'", FHIRTokenType.Literal, 8, 17),
                            schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)]
                        }));
                })
            })
            describe('NUMBER', () => {
                test("0|", () => {
                    expect(JSON.stringify(reduceAt("0|")))
                        .toEqual(JAC({ 
                            token: T("0", FHIRTokenType.Literal, 0, 1),
                        }));
                })
            })
            describe('DATETIME', () => {
                test("@|", () => {
                    expect(JSON.stringify(reduceAt("@|")))
                        .toEqual(JAC({ 
                            token: T("@", FHIRTokenType.Literal, 0, 1),
                        }));
                })
                test("@2000|", () => {
                    expect(JSON.stringify(reduceAt("@2000|")))
                        .toEqual(JAC({ 
                            token: T("@2000", FHIRTokenType.Literal, 0, 5),
                        }));
                })
            })
            describe('TIME', () => {
                test("@T|", () => {
                    // Special case of incomplete grammar,
                    // for autocomplete it doesn't matter, for now ;)
                    expect(JSON.stringify(reduceAt("@T|")))
                        .toEqual(JAC({ 
                            token: T("@", FHIRTokenType.Literal, 0, 1),
                        }));
                })
                test("@T20|", () => {
                    expect(JSON.stringify(reduceAt("@T20|")))
                        .toEqual(JAC({ 
                            token: T("@T20", FHIRTokenType.Literal, 0, 4),
                        }));
                })
            })
            describe('quantity', () => {
                test("20.12|", () => {
                    expect(JSON.stringify(reduceAt("20.12|")))
                        .toEqual(JAC({ 
                            token: T("20.12", FHIRTokenType.Literal, 0, 5),
                        }));
                })
                test("4 days|", () => {
                    expect(JSON.stringify(reduceAt("4 days|")))
                        .toEqual(JAC({ 
                            token: T("4days", FHIRTokenType.Literal, 0, 6),
                        }));
                })
            })
        })
        describe('externalConstant', () => {
            test("%|", () => {
                expect(JSON.stringify(reduceAt("%|")))
                        .toEqual(JAC({ 
                            token: T("", FHIRTokenType.ExternalConstant, 0, 1),
                        }));
            })
            test("%a|", () => {
                expect(JSON.stringify(reduceAt("%a|")))
                        .toEqual(JAC({ 
                            token: T("a", FHIRTokenType.ExternalConstant, 0, 2),
                        }));
            })
            test("%`a`|", () => {
                expect(JSON.stringify(reduceAt("%`a`|")))
                        .toEqual(JAC({ 
                            token: T("`a`", FHIRTokenType.ExternalConstant, 0, 4),
                        }));
            })
            test("%`a|", () => {
                expect(JSON.stringify(reduceAt("%`a|")))
                        .toEqual(JAC({ 
                            token: T("`a", FHIRTokenType.ExternalConstant, 0, 3),
                        }));
            })
            test("%'a'|", () => {
                expect(JSON.stringify(reduceAt("%'a'|")))
                        .toEqual(JAC({ 
                            token: T("'a'", FHIRTokenType.ExternalConstant, 0, 4),
                        }));
            })
            test("%'a|", () => {
                expect(JSON.stringify(reduceAt("%'a|")))
                        .toEqual(JAC({ 
                            token: T("'a", FHIRTokenType.ExternalConstant, 0, 3),
                        }));
            })
        })
        describe('parenthesized', () => {
            test("|()", () => {
                expect(JSON.stringify(reduceAt("|()")))
                    .toEqual(JAC({ 
                        token: T("", FHIRTokenType.Empty, 0, 0)
                     }));
            })
            test("(|)", () => {
                expect(JSON.stringify(reduceAt("(|)")))
                    .toEqual(JAC({ 
                        token: T("", FHIRTokenType.Empty, 1, 1)
                     }));
            })
            test("(name|)", () => {
                expect(JSON.stringify(reduceAt("(name|)")))
                    .toEqual(JAC({ 
                        token: T("name", FHIRTokenType.Identifier, 1, 5)
                     }));
            })
            test("(name).|", () => {
                expect(JSON.stringify(reduceAt("(name).|")))
                    .toEqual(JAC({ 
                        stype: ScopeType.Invocation,
                        svalue: T("name", FHIRTokenType.Identifier, 1, 5),
                        token: T("", FHIRTokenType.Empty, 7, 7),
                        schemaPath: [T("name", FHIRTokenType.Identifier, 1, 5)]
                     }));
            })
            test("(name|", () => {
                expect(JSON.stringify(reduceAt("(name|")))
                    .toEqual(JAC({ 
                        token: T("name", FHIRTokenType.Identifier, 1, 5)
                     }));
            })
            test("('name|", () => {
                expect(JSON.stringify(reduceAt("('name|")))
                    .toEqual(JAC({ 
                        token: T("'name", FHIRTokenType.Literal, 1, 6)
                     }));
            })
            test("()|", () => {
                expect(JSON.stringify(reduceAt("()|")))
                    .toEqual(JAC({ 
                        token: T(")", FHIRTokenType.NonTriggeringCharacter, 2, 2)
                     }));
            })
        })
    })
    // describe('invocation', () => {
        describe('one invocation', () => {
            test('"|a.b"', () => {
                expect(JSON.stringify(reduceAt("|a.b")))
                .toEqual(JAC({
                    token: T("a", FHIRTokenType.Identifier, 0, 1)
                }));
            })
            test('"a|.b"', () => {
                expect(JSON.stringify(reduceAt("a|.b")))
                    .toEqual(JAC({
                        token: T("a", FHIRTokenType.Identifier, 0, 1)
                    }));
            })
            test('"a.|b"', () => {
                expect(JSON.stringify(reduceAt("a.|b")))
                    .toEqual(JAC({
                        stype: ScopeType.Invocation,
                        svalue: T("a", FHIRTokenType.Identifier, 0, 1),
                        token: T("b", FHIRTokenType.Identifier, 2, 3),
                        schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)]
                    }));
            })
            test('"a.b|"', () => {
                expect(JSON.stringify(reduceAt("a.b|")))
                    .toEqual(JAC({
                        stype: ScopeType.Invocation,
                        svalue: T("a", FHIRTokenType.Identifier, 0, 1),
                        token: T("b", FHIRTokenType.Identifier, 2, 3),
                        schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)]
                    }));
            })
        })
        describe('two invocations', () => {
            test('"|a.b.c"', () => {
                expect(JSON.stringify(reduceAt("|a.b.c")))
                    .toEqual(JAC({
                        token: T("a", FHIRTokenType.Identifier, 0, 1)
                    }));
            })
            test('"a|.b.c"', () => {
                expect(JSON.stringify(reduceAt("a|.b.c")))
                    .toEqual(JAC({
                        token: T("a", FHIRTokenType.Identifier, 0, 1)
                    }));
            })
            test('"a.|b.c"', () => {
                expect(JSON.stringify(reduceAt("a.|b.c")))
                    .toEqual(JAC({
                        stype: ScopeType.Invocation,
                        svalue: T("a", FHIRTokenType.Identifier, 0, 1),
                        token: T("b", FHIRTokenType.Identifier, 2, 3),
                        schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)]
                    }));
            })
            test('"a.b|.c"', () => {
                expect(JSON.stringify(reduceAt("a.b|.c")))
                    .toEqual(JAC({
                        stype: ScopeType.Invocation,
                        svalue: T("a", FHIRTokenType.Identifier, 0, 1),
                        token: T("b", FHIRTokenType.Identifier, 2, 3),
                        schemaPath: [T("a", FHIRTokenType.Identifier, 0, 1)]
                    }));
            })
            test('"a.b.|c"', () => {
                expect(JSON.stringify(reduceAt("a.b.|c")))
                    .toEqual(JAC({
                        stype: ScopeType.Invocation,
                        svalue: T("b", FHIRTokenType.Identifier, 2, 3),
                        token: T("c", FHIRTokenType.Identifier, 4, 5),
                        schemaPath: [
                            T("a", FHIRTokenType.Identifier, 0, 1),
                            T("b", FHIRTokenType.Identifier, 2, 3)
                        ]
                    }));
            })
            test('"a.b.c|"', () => {
                expect(JSON.stringify(reduceAt("a.b.c|")))
                    .toEqual(JAC({
                        stype: ScopeType.Invocation,
                        svalue: T("b", FHIRTokenType.Identifier, 2, 3),
                        token: T("c", FHIRTokenType.Identifier, 4, 5),
                        schemaPath: [
                            T("a", FHIRTokenType.Identifier, 0, 1),
                            T("b", FHIRTokenType.Identifier, 2, 3)
                        ]
                    }));
            })
        })
    //     describe('partial invocation', () => {
    //         test('"|a."', () => {
    //             expect(JSON.stringify(reduceAt("|a.")))
    //                 .toEqual(JAC({ttext: "a"}));
    //         })
    //         test('"a|."', () => {
    //             expect(JSON.stringify(reduceAt("a|.")))
    //                 .toEqual(JAC({ttext: "a"}));
    //         })
    //         test('"a.|"', () => {
    //             expect(JSON.stringify(reduceAt("a.|")))
    //                 .toEqual(JAC({stype: ScopeType.Invocation, svalue: T("a"), token: T("", FHIRTokenType.Empty), schemaPath: [T("a")]}));
    //         })
    //         test('"a.|b."', () => {
    //             expect(JSON.stringify(reduceAt("a.|b.")))
    //                 .toEqual(JAC({stype: ScopeType.Invocation, svalue: T("a"), ttext: "b", schemaPath: [T("a")]}));
    //         })
    //         test('"a.b|."', () => {
    //             expect(JSON.stringify(reduceAt("a.b|.")))
    //                 .toEqual(JAC({stype: ScopeType.Invocation, svalue: T("a"), ttext: "b", schemaPath: [T("a")]}));
    //         })
    //         test('"a.b.|"', () => {
    //             expect(JSON.stringify(reduceAt("a.b.|")))
    //                 .toEqual(JAC({stype: ScopeType.Invocation, svalue: T("b"), token: T("", FHIRTokenType.Empty), schemaPath: [T("a"), T("b")]}));
    //         })
    //         test('"a.b.|c."', () => {
    //             expect(JSON.stringify(reduceAt("a.b.|c.")))
    //                 .toEqual(JAC({stype: ScopeType.Invocation, svalue: T("b"), ttext: "c", schemaPath: [T("a"), T("b")]}));
    //         })
    //         test('"a.b.c|."', () => {
    //             expect(JSON.stringify(reduceAt("a.b.c|.")))
    //                 .toEqual(JAC({stype: ScopeType.Invocation, svalue: T("b"), ttext: "c", schemaPath: [T("a"), T("b")]}));
    //         })
    //         test('"a.b.c.|"', () => {
    //             expect(JSON.stringify(reduceAt("a.b.c.|")))
    //                 .toEqual(JAC({stype: ScopeType.Invocation, svalue: T("c"), token: T("", FHIRTokenType.Empty), schemaPath: [T("a"), T("b"), T("c")]}));
    //         })
    //     })
    // });
    // describe('indexing', () => {
    //     test('"|name[0]"', () => {
    //         expect(JSON.stringify(reduceAt("|name[0]")))
    //             .toEqual(JAC({ ttext: "name", ttype: FHIRTokenType.Identifier }));
    //     })
    //     test('"name|[0]"', () => {
    //         expect(JSON.stringify(reduceAt("name|[0]")))
    //             .toEqual(JAC({ ttext: "name", ttype: FHIRTokenType.Identifier }));
    //     })
    //     test('"name[|0]"', () => {
    //         expect(JSON.stringify(reduceAt("name[|0]")))
    //             .toEqual(JAC({ ttext: "0", ttype: FHIRTokenType.Literal, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
    //     })
    //     test('"name[|"', () => {
    //         expect(JSON.stringify(reduceAt("name[|")))
    //             .toEqual(JAC({ ttext: "", ttype: FHIRTokenType.Empty, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
    //     })
    //     test('"name[0|"', () => {
    //         expect(JSON.stringify(reduceAt("name[0|")))
    //             .toEqual(JAC({ ttext: "0", ttype: FHIRTokenType.Literal, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
    //     })
    //     test('"name[0|]"', () => {
    //         expect(JSON.stringify(reduceAt("name[0|]")))
    //             .toEqual(JAC({ ttext: "0", ttype: FHIRTokenType.Literal, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
    //     })
    //     test('"name[0]|"', () => {
    //         expect(JSON.stringify(reduceAt("name[0]|")))
    //             .toEqual(JAC({ ttext: "]", ttype: FHIRTokenType.NonTriggeringCharacter, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
    //     })
    //     test('"name[Patient]|"', () => {
    //         expect(JSON.stringify(reduceAt("name[Patient]|")))
    //             .toEqual(JAC({ ttext: "]", ttype: FHIRTokenType.NonTriggeringCharacter, schemaPath: [T("name", FHIRTokenType.Identifier)] }));
    //     })
    //     test('"(Patient)[|0]"', () => {
    //         expect(JSON.stringify(reduceAt("(Patient)[|0]")))
    //             .toEqual(JAC({ ttext: "0", ttype: FHIRTokenType.Literal, schemaPath: [T("Patient", FHIRTokenType.Type)] }));
    //     })
    //     test('"(Patient)[0]|"', () => {
    //         expect(JSON.stringify(reduceAt("(Patient)[0]|")))
    //             .toEqual(JAC({ ttext: "]", ttype: FHIRTokenType.NonTriggeringCharacter, schemaPath: [T("Patient", FHIRTokenType.Type)] }));
    //     })
    // })
    describe('is,as', () => {
        test('"name| is String"', () => {
            expect(JSON.stringify(reduceAt("name| is String")))
                .toEqual(JAC({ 
                    token: T("name", FHIRTokenType.Identifier, 0, 4)
                }));
        })
        // TODO: Broken case
        test('"| is String"', () => {
            expect(JSON.stringify(reduceAt("| is String")))
                .toEqual(JAC({ 
                    token: T("is", FHIRTokenType.Identifier, 1, 3)
                }));
        })
        test('"name is| String"', () => {
            expect(JSON.stringify(reduceAt("name is| String")))
                .toEqual(JAC({ 
                    token: T("is", FHIRTokenType.NonTriggeringCharacter, 7, 7)
                }));
        })
        test('"name is String|"', () => {
            expect(JSON.stringify(reduceAt("name is String|")))
                .toEqual(JAC({ 
                    token: T("String", FHIRTokenType.Type, 8, 14)
                }));
        })
        test('"name is |"', () => {
            expect(JSON.stringify(reduceAt("name is |")))
                .toEqual(JAC({ 
                    token: T("", FHIRTokenType.Type, 7, 7)
                }));
        })
        test('"(name as String).|"', () => {
            expect(JSON.stringify(reduceAt("(name as String).|")))
                .toEqual(JAC({ 
                    stype: ScopeType.Invocation,
                    svalue: T("String", FHIRTokenType.Type, 9, 15),
                    token: T("", FHIRTokenType.Empty, 17, 17),
                    schemaPath: [T("String", FHIRTokenType.Type, 9, 15)]
                }));
        })
        test('"(name is String).|"', () => {
            expect(JSON.stringify(reduceAt("(name is String).|")))
                .toEqual(JAC({ 
                    stype: ScopeType.Invocation,
                    svalue: T("Boolean", FHIRTokenType.Type),
                    token: T("", FHIRTokenType.Empty, 17, 17),
                    schemaPath: [T("Boolean", FHIRTokenType.Type)]
                }));
        })
    })
});