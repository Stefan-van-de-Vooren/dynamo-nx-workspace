"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
// const licenseText = "";
function default_1(schema) {
    return schematics_1.chain([
        schematics_1.externalSchematic("@nrwl/schematics", "library", {
            name: schema.name,
            directory: 'pages',
            routing: true
        }),
        schematics_1.externalSchematic("@schematics/angular", "component", {
            project: 'pages-' + schema.name,
            module: 'pages-' + schema.name + '.module.ts',
            name: schema.name,
            styleext: "scss"
        }),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map