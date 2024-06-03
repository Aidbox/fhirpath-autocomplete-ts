import { describe, expect, test } from '@jest/globals';
import { suggest, CompletionItemKind } from '../src/suggestion'
import { readFileSync } from 'fs';
import { Position, Range } from '../src/treeReducer';

let file = readFileSync("./test/fhir_schemas.json")
let fhirSchemas = JSON.parse(file.toString()) as Array<Object>
let specmap = {} as Map<string, Object>
fhirSchemas.forEach(schema => {
  specmap[schema["type"]] = schema
  specmap[schema["url"]] = schema
})

function suggestAt(
  fhirpath: string,
  forEachExpressions: Array<string>,
  externalConstants: Array<{ name: string, type: string, value: string }>
) {
  let cursor = fhirpath.indexOf("|")
  let path = fhirpath.replace("|", "")
  return suggest({
    fhirSchemas: specmap,
    type: "Patient",
    forEachExpressions: forEachExpressions,
    externalConstants: externalConstants,
    fhirpath: path,
    cursor: cursor
  })
}

describe('suggestion', () => {
  describe('empty fhirpath', () => {
    test('"|"', () => {
      expect(suggestAt('|', [], [])).toEqual(expect.objectContaining({
        items: expect.arrayContaining([
          {
            label: "name",
            detail: "HumanName",
            kind: CompletionItemKind.Field,
            textEdit: {
              range: new Range(
                new Position(0, 0),
                new Position(0, 0)
              ),
              newText: "name"
            }
          },
          expect.objectContaining({
            label: "id"
          }),
          expect.not.objectContaining({
            label: "where",
          })
        ])
      }))
    })
  })
  describe('empty fhirpath with constants', () => {
    test('"|"', () => {
      expect(suggestAt('|', [], [{ name: "const", value: "1234", type: "string" }]))
        .toEqual(expect.objectContaining({
          items: expect.arrayContaining([
            {
              label: "name",
              detail: "HumanName",
              kind: CompletionItemKind.Field,
              textEdit: {
                range: new Range(
                  new Position(0, 0),
                  new Position(0, 0)
                ),
                newText: "name"
              }
            },
            {
              label: "const",
              detail: "string",
              kind: CompletionItemKind.Constant,
              textEdit: {
                range: new Range(
                  new Position(0, 0),
                  new Position(0, 0)
                ),
                newText: "%const"
              }
            },
            expect.objectContaining({
              label: "id"
            }),
            expect.not.objectContaining(
              {
                label: "where",
              })
          ])
        }))
    })
  })
  describe('empty fhirpath with constants with expressions', () => {
    test('["name"] "|"', () => {
      expect(suggestAt('|', ["name"], [{ name: "const", value: "1234", type: "string" }]))
        .toEqual(expect.objectContaining({
          items: expect.arrayContaining([
            {
              label: "family",
              detail: "string",
              kind: CompletionItemKind.Field,
              textEdit: {
                range: new Range(
                  new Position(0, 0),
                  new Position(0, 0)
                ),
                newText: "family"
              }
            },
            {
              label: "const",
              detail: "string",
              kind: CompletionItemKind.Constant,
              textEdit: {
                range: new Range(
                  new Position(0, 0),
                  new Position(0, 0)
                ),
                newText: "%const"
              }
            },
            expect.objectContaining({
              label: "extension",
              kind: CompletionItemKind.Field,
            }),
            expect.not.objectContaining(
              {
                label: "where",
              })
          ])
        }))
    })
    test('["name", "period"] "|"', () => {
      expect(suggestAt(
        '|',
        ["name", "period"],
        [{ name: "const", value: "1234", type: "string" }]))
        .toEqual(expect.objectContaining({
          isComplete: true,
          items: expect.arrayContaining([
            {
              label: "start",
              detail: "dateTime",
              kind: CompletionItemKind.Field,
              textEdit: {
                range: new Range(
                  new Position(0, 0),
                  new Position(0, 0)
                ),
                newText: "start"
              }
            },
            {
              label: "const",
              detail: "string",
              kind: CompletionItemKind.Constant,
              textEdit: {
                range: new Range(
                  new Position(0, 0),
                  new Position(0, 0)
                ),
                newText: "%const"
              }
            },
            expect.not.objectContaining({
              label: "where",
            })
          ])
        }))
    })
  })
  describe('fhirpath with constants', () => {
    test('"name.|"', () => {
      expect(suggestAt('name.|', [], [{ name: "const", value: "1234", type: "string" }]))
        .toEqual(expect.objectContaining({
          items: expect.arrayContaining([
            {
              label: "family",
              detail: "string",
              kind: CompletionItemKind.Field,
              textEdit: {
                range: new Range(
                  new Position(0, 5),
                  new Position(0, 5)
                ),
                newText: "family"
              }
            },
            expect.not.objectContaining({
              label: "const",
            }),
            expect.objectContaining({
              label: "where",
            })
          ])
        }))
    })
  })
  describe('backbone element', () => {
    describe('suggest', () => {
      test('"|"', () => {
        expect(suggestAt('|', [], [{ name: "const", value: "1234", type: "string" }]))
          .toEqual(expect.objectContaining({
            items: expect.arrayContaining([
              {
                label: "contact",
                detail: "BackboneElement",
                kind: CompletionItemKind.Field,
                textEdit: {
                  range: new Range(
                    new Position(0, 0),
                    new Position(0, 0)
                  ),
                  newText: "contact"
                }
              },
            ])
          }))
      })
    })
    describe('in path', () => {
      describe('in foreach', () => {
        test('["contact"] "|"', () => {
          expect(suggestAt('|', ["contact"], [{ name: "const", value: "1234", type: "string" }]))
            .toEqual(expect.objectContaining({
              items: expect.arrayContaining([
                {
                  label: "address",
                  detail: "Address",
                  kind: CompletionItemKind.Field,
                  textEdit: {
                    range: new Range(
                      new Position(0, 0),
                      new Position(0, 0)
                    ),
                    newText: "address"
                  }
                },
                expect.not.objectContaining({
                  label: "$index",
                }),
                expect.objectContaining({
                  label: "const",
                }),
                expect.not.objectContaining({
                  label: "where",
                })
              ])
            }))
        })
      })
      describe('in fhirpath', () => {
        test('"contact.|"', () => {
          expect(suggestAt('contact.|', [], [{ name: "const", value: "1234", type: "string" }]))
            .toEqual(expect.objectContaining({
              items: expect.arrayContaining([
                {
                  label: "address",
                  detail: "Address",
                  kind: CompletionItemKind.Field,
                  textEdit: {
                    range: new Range(
                      new Position(0, 8),
                      new Position(0, 8)
                    ),
                    newText: "address"
                  }
                },
                expect.not.objectContaining({
                  label: "$index",
                }),
                expect.not.objectContaining({
                  label: "const",
                }),
                expect.objectContaining({
                  label: "where",
                })
              ])
            }))
        })
      })
    })
  })
  describe('$this', () => {
    describe('in forEach', () => {
      test('"|"', () => {
        expect(suggestAt('|', ["name"], [{ name: "const", value: "1234", type: "string" }]))
          .toEqual(expect.objectContaining({
            items: expect.arrayContaining([
              {
                label: "$this",
                detail: "HumanName",
                kind: CompletionItemKind.Keyword,
                textEdit: {
                  range: new Range(
                    new Position(0, 0),
                    new Position(0, 0)
                  ),
                  newText: "$this"
                }
              },
              expect.not.objectContaining({
                label: "$index",
              }),
              expect.objectContaining({
                label: "const",
              }),
              expect.not.objectContaining({
                label: "where",
              })
            ])
          }))
      })
    })
    describe('in functions', () => {
      test('"name.where(|)"', () => {
        expect(suggestAt('name.where(|)', [], [{ name: "const", value: "1234", type: "string" }]))
          .toEqual(expect.objectContaining({
            items: expect.arrayContaining([
              {
                label: "$this",
                detail: "HumanName",
                kind: CompletionItemKind.Keyword,
                textEdit: {
                  range: new Range(
                    new Position(0, 11),
                    new Position(0, 11)
                  ),
                  newText: "$this"
                }
              },
              expect.objectContaining({
                label: "const",
              }),
              expect.not.objectContaining({
                label: "where",
              })
            ])
          }))
      })
    })
  })
  describe('base fields', () => {
    test('"name.|"', () => {
      expect(suggestAt(
        'name.|',
        [],
        [{ name: "const", value: "1234", type: "string" }]))
        .toEqual(expect.objectContaining({
          items: expect.arrayContaining([
            {
              label: "extension",
              detail: "Extension",
              kind: CompletionItemKind.Field,
              textEdit: {
                range: new Range(
                  new Position(0, 5),
                  new Position(0, 5)
                ),
                newText: "extension"
              }
            },
            expect.not.objectContaining(
              {
                label: "where",
              })
          ])
        }))
    })
    test('"name.extension.|"', () => {
      expect(suggestAt(
        'name.extension.|',
        [],
        [{ name: "const", value: "1234", type: "string" }]))
        .toEqual(expect.objectContaining({
          items: expect.arrayContaining([
            {
              label: "valueMeta",
              detail: "Meta",
              kind: CompletionItemKind.Field,
              textEdit: {
                range: new Range(
                  new Position(0, 15),
                  new Position(0, 15)
                ),
                newText: "value.ofType(Meta)"
              }
            },
            expect.objectContaining(
              {
                label: "where",
              })
          ])
        }))
    })
    test('["name"], "extension.|"', () => {
      expect(suggestAt(
        'extension.|',
        ["name"],
        [{ name: "const", value: "1234", type: "string" }]))
        .toEqual(expect.objectContaining({
          items: expect.arrayContaining([
            {
              label: "valueMeta",
              detail: "Meta",
              kind: CompletionItemKind.Field,
              textEdit: {
                range: new Range(
                  new Position(0, 10),
                  new Position(0, 10)
                ),
                newText: "value.ofType(Meta)"
              }
            },
            expect.not.objectContaining(
              {
                label: "const",
              }),
            expect.objectContaining(
              {
                label: "where",
              })
          ])
        }))
    })
  })

  describe('polymorphic', () => {
    test('"name.extension.value.ofType(Meta).|"', () => {
      expect(suggestAt(
        'name.extension.value.ofType(Meta).|',
        [],
        [{ name: "const", value: "1234", type: "string" }]))
        .toEqual(expect.objectContaining({
          items: expect.arrayContaining([
            {
              label: "security",
              detail: "Coding",
              kind: CompletionItemKind.Field,
              textEdit: {
                range: new Range(
                  new Position(0, 34),
                  new Position(0, 34)
                ),
                newText: "security"
              }
            },
            expect.not.objectContaining(
              {
                label: "const",
              }),
            expect.objectContaining(
              {
                label: "where",
              })
          ])
        }))
    })
  })
})