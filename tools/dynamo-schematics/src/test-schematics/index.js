"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
function default_1(schema) {
    return schematics_1.chain([
        schematics_1.externalSchematic("@nrwl/schematics", "lib", {
            name: schema.name
        })
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map