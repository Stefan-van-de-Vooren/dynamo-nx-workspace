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

    it('overrides angular pipe - shared', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'pipe',
            { name: 'test-pipe' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/shared/pipes/test-pipe.pipe.spec.ts',
        );
        expect(tree.files).toContain('/libs/shared/pipes/test-pipe.pipe.ts');
    });

    it('overrides angular pipe - feature', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'pipe',
            { name: 'test-pipe', feature: 'test-feature' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/features/test-feature/pipes/test-pipe.pipe.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/features/test-feature/pipes/test-pipe.pipe.ts',
        );
    });

    it('overrides angular pipe - page', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'pipe',
            { name: 'test-pipe', page: 'test-page' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/pages/test-page/pipes/test-pipe.pipe.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/pages/test-page/pipes/test-pipe.pipe.ts',
        );
    });
});
