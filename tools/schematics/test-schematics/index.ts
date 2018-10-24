import { SchematicContext, Rule, Tree } from "@angular-devkit/schematics";

export default function(): Rule {
  console.log('hoera')
  /*
    return chain([
    externalSchematic("@nrwl/schematics", "lib", {
      name: schema.name
    })
  ]);
  */
    return (tree: Tree, _context: SchematicContext) => {
        tree.create('hello', 'world');
        return tree;
    };
}
