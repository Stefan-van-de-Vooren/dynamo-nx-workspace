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

    it('overrides angular directive - shared', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'directive',
            { name: 'test-directive' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/shared/directives/test-directive.directive.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/shared/directives/test-directive.directive.ts',
        );
    });

    it('overrides angular directive - feature', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'directive',
            { name: 'test-directive', feature: 'test-feature' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/features/test-feature/directives/test-directive.directive.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/features/test-feature/directives/test-directive.directive.ts',
        );
    });

    it('overrides angular directive - page', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'directive',
            { name: 'test-directive', page: 'test-page' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/pages/test-page/directives/test-directive.directive.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/pages/test-page/directives/test-directive.directive.ts',
        );
    });
});
