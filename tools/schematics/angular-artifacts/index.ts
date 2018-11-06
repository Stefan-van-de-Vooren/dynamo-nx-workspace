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
    return (host: Tree, context: SchematicContext) => {
        const options = normalizeOptions(host, schema, 'component');
        options['skipImport'] = true;

        return chain([
            externalSchematic('@schematics/angular', 'component', options),
            setTag(options),
        ])(host, context);
    };
}

export function angularPipe(schema: Schema): Rule {
    return (host: Tree, context: SchematicContext) => {
        const options = normalizeOptions(host, schema, 'pipe');
        options['skipImport'] = true;

        return chain([
            externalSchematic('@schematics/angular', 'pipe', options),
            setTag(options),
        ])(host, context);
    };
}

export function angularService(schema: Schema): Rule {
    return (host: Tree, context: SchematicContext) => {
        const options = normalizeOptions(host, schema, 'service');

        return chain([
            externalSchematic('@schematics/angular', 'service', options),
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

    let path = `libs/shared/${type}s`;
    let tag = '';

    if (feature) {
        path = `libs/features/${feature}/${type}s`;
        tag = `feature:${feature}`;
    } else if (page) {
        path = `libs/pages/${page}/${type}s`;
        tag = `page:${page}`;
    }

    return {
        project: 'test-app',
        ...options,
        path,
        tag,
    };
}
