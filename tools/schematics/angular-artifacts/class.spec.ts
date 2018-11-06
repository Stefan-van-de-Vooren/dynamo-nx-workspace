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

    it('overrides angular class - shared', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'class',
            { name: 'test-class' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain('/libs/shared/classes/test-class.spec.ts');
        expect(tree.files).toContain('/libs/shared/classes/test-class.ts');
    });

    it('overrides angular class - feature', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'class',
            { name: 'test-class', feature: 'test-feature' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/features/test-feature/classes/test-class.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/features/test-feature/classes/test-class.ts',
        );
    });

    it('overrides angular class - page', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'class',
            { name: 'test-class', page: 'test-page' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/pages/test-page/classes/test-class.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/pages/test-page/classes/test-class.ts',
        );
    });
});
