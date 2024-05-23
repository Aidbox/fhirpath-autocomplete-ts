// import { AutocompleteContext, reduce } from './treeReducer';
// import { suggest } from './suggestion';
// import { readFileSync } from 'node:fs'
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
//     forEachExpressions: [],
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
// // console.log(reduceAt("name as    |").token)
// // console.log(reduceAt("name as |").token)
// // console.log(JSON.stringify(reduceAt("name.|"), null, 4))
// //  console.log(reduce("name.where(name = 'dj')", 21,))
// console.log(suggestAt(specmap, "name.where(%|").items)
export * from './suggestion';
export * from './treeReducer';
export * from './fhirpath_functions';
//# sourceMappingURL=index.js.map