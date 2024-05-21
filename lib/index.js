import { reduce } from './treeReducer';
import { suggest } from './suggestion';
import { readFileSync } from 'node:fs';
function reduceAt(fhirpath) {
    let cursor = fhirpath.indexOf("|");
    let path = fhirpath.replace("|", "");
    return reduce(path, cursor /*  - (path.split(" ").length - 1 */);
}
function suggestAt(specmap, fhirpath) {
    let cursor = fhirpath.indexOf("|");
    let path = fhirpath.replace("|", "");
    return suggest(specmap, "Patient", [], path, cursor);
}
let file = readFileSync("./test/fhir_schemas.json");
let fhirSchemas = JSON.parse(file.toString());
let specmap = {};
fhirSchemas.forEach(schema => {
    specmap[schema["id"]] = schema;
    specmap[schema["url"]] = schema;
});
// TODO: add to tests
// console.log(reduceAt("|()"))
// console.log(reduceAt("name as |").token)
// console.log(JSON.stringify(reduceAt("name.|"), null, 4))
//  console.log(reduce("name.where(name = 'dj')", 21,))
console.log(suggestAt(specmap, "name as |"));
// export * from './suggestion'
// export * from './treeReducer'
// export * from './fhirpath_functions'
//# sourceMappingURL=index.js.map