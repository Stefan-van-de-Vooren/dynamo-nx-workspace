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

    it('overrides angular guard - shared', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'guard',
            { name: 'test-guard' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/shared/guards/test-guard.guard.spec.ts',
        );
        expect(tree.files).toContain('/libs/shared/guards/test-guard.guard.ts');
    });

    it('overrides angular guard - feature', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'guard',
            { name: 'test-guard', feature: 'test-feature' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/features/test-feature/guards/test-guard.guard.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/features/test-feature/guards/test-guard.guard.ts',
        );
    });

    it('overrides angular guard - page', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'guard',
            { name: 'test-guard', page: 'test-page' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/pages/test-page/guards/test-guard.guard.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/pages/test-page/guards/test-guard.guard.ts',
        );
    });
});
