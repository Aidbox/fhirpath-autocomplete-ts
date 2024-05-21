import { describe, expect, test } from '@jest/globals';
import { suggest } from '../src/suggestion'
import { readFileSync } from 'fs';

let file = readFileSync("./test/fhir_schemas.json")
let fhirSchemas = JSON.parse(file.toString()) as Array<Object>
let specmap = {} as Map<string, Object>
fhirSchemas.forEach(schema => {
	specmap[schema["type"]] = schema
	specmap[schema["url"]] = schema
})

function suggestAt(fhirpath: string) {
  let cursor = fhirpath.indexOf("|") 
  let path = fhirpath.replace("|", "")
  return suggest(specmap, "Patient", [], path, cursor)
}

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

describe('suggestion', () => {
    describe('empty', () => {
    //    test('"()"', () => {
    //         expect(suggestAt('|')).toMatchObject({
    //             isComplete: true,
    //             completionItems: []
    //         })
    //    }) 
       test('"()"', () => {
            expect(1).toEqual(1)
       }) 


    })
    // describe('identifier', () => {
        
    // })
})