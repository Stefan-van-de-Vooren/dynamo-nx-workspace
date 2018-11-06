import { Schema } from './schema';
import { setNXTag } from '../utils/nx';
import {
    chain,
    externalSchematic,
    Rule,
    Tree,
    SchematicContext,
} from '@angular-devkit/schematics';

export function angularComponent(schema: Schema): Rule {
    return angularSchematic('component', schema, { skipImport: true });
}

export function angularPipe(schema: Schema): Rule {
    return angularSchematic('pipe', schema, { skipImport: true });
}

export function angularService(schema: Schema): Rule {
    return angularSchematic('service', schema, null);
}

export function angularGuard(schema: Schema): Rule {
    return angularSchematic('guard', schema, null);
}

export function angularClass(schema: Schema): Rule {
    return angularSchematic('class', schema, { spec: true });
}

export function angularDirective(schema: Schema): Rule {
    return angularSchematic('directive', schema, { skipImport: true });
}

export function angularEnum(schema: Schema): Rule {
    return angularSchematic('enum', schema, null);
}

function angularSchematic(
    schematic: string,
    schema: Schema,
    extraOptions: any,
): Rule {
    return (host: Tree, context: SchematicContext) => {
        const options = normalizeOptions(host, schema, schematic);

        return chain([
            externalSchematic(
                '@schematics/angular',
                schematic,
                Object.assign(options, extraOptions),
            ),
            setTag(options),
        ])(host, context);
    };
}

function setTag(options: any): Rule {
    const tag = options.tag;
    delete options.tag;

    return setNXTag(tag, options);
}

function normalizeOptions(host: Tree, options: Schema, type: string): any {
    const feature = options.feature;
    const page = options.page;

    delete options.feature;
    delete options.page;

    let types = `${type}s`;
    if (type.endsWith('s')) {
        types = `${type}es`;
    }

    let path = `libs/shared/${types}`;
    let tag = '';

    if (feature) {
        path = `libs/features/${feature}/${types}`;
        tag = `feature:${feature}`;
    } else if (page) {
        path = `libs/pages/${page}/${types}`;
        tag = `page:${page}`;
    }

    return {
        project: 'test-app',
        ...options,
        path,
        tag,
    };
}
