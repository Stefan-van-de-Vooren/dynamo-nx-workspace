import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: any): Rule {
    return chain([
        externalSchematic('@nrwl/schematics', 'library', {
            name: schema.name,
            routing: true
        }),
        externalSchematic('@schematics/angular', 'component', {
            name: schema.name,
            module: schema.name
        })
    ]);
}
