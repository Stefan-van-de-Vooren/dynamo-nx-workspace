"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    console.log('hoera');
    /*
      return chain([
      externalSchematic("@nrwl/schematics", "lib", {
        name: schema.name
      })
    ]);
    */
    return (tree, _context) => {
        tree.create('hello', 'world');
        return tree;
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map