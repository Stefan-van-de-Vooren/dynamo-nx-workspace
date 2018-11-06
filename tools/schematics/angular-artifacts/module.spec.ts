import { Tree, VirtualTree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import * as testing from '../utils/testing';
// import * as json from '../utils/json';

const collectionPath = path.join(__dirname, '../collection.json');

describe('dynamo-app', () => {
    let appTree: Tree;

    beforeEach(() => {
        appTree = new VirtualTree();
        appTree = testing.createEmptyWorkspace(appTree);
    });

    it('overrides angular module - shared', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'module',
            { name: 'test-module' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/shared/modules/test-module/test-module.module.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/shared/modules/test-module/test-module.module.ts',
        );
    });

    it('overrides angular module - feature', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'module',
            { name: 'test-module', feature: 'test-feature' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/features/test-feature/modules/test-module/test-module.module.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/features/test-feature/modules/test-module/test-module.module.ts',
        );
    });

    it('overrides angular module - page', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'module',
            { name: 'test-module', page: 'test-page' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/pages/test-page/modules/test-module/test-module.module.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/pages/test-page/modules/test-module/test-module.module.ts',
        );
    });
});
