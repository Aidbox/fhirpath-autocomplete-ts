"use strict";
// import { AutocompleteContext, reduce } from './treeReducer';
// import { suggest } from './suggestion';
// import { readFileSync } from 'node:fs'
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// function reduceAt(fhirpath: string) : AutocompleteContext {
//   let cursor = fhirpath.indexOf("|")
//   let path = fhirpath.replace("|", "")
//   return reduce(path, cursor/*  - (path.split(" ").length - 1 */)
// }
// function suggestAt(specmap, fhirpath: string) {
//   let cursor = fhirpath.indexOf("|")
//   let path = fhirpath.replace("|", "")
//   return suggest({
//     fhirschemas: specmap,
//     type: "Patient",
//     forEachExpressions: ["contact"],
//     externalConstants: [{name: "hello", type: "string", value: "hello"}],
//     fhirpath: path,
//     cursor: cursor
//   })
// }
// let file = readFileSync("./test/fhir_schemas.json")
// let fhirSchemas = JSON.parse(file.toString()) as Array<Object>
// let specmap = {} as Object
// fhirSchemas.forEach(schema => {
// 	specmap[schema["id"]] = schema
// 	specmap[schema["url"]] = schema
// })
// // TODO: add to tests
// // console.log(reduceAt("(given = $thi|)"))
// // console.log(reduceAt("name as |").token)
// // console.log(JSON.stringify(reduceAt("name.|"), null, 4))
// //  console.log(reduce("name.where(name = 'dj')", 21,))
// console.log(suggestAt(specmap, "|").items)
__exportStar(require("./suggestion"), exports);
__exportStar(require("./treeReducer"), exports);
__exportStar(require("./fhirpath_functions"), exports);
//# sourceMappingURL=index.js.map