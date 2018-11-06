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

    it('overrides angular component - shared', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'component',
            { name: 'test-component' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/shared/components/test-component/test-component.component.css',
        );
        expect(tree.files).toContain(
            '/libs/shared/components/test-component/test-component.component.html',
        );
        expect(tree.files).toContain(
            '/libs/shared/components/test-component/test-component.component.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/shared/components/test-component/test-component.component.ts',
        );
    });

    it('overrides angular component - feature', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'component',
            { name: 'test-component', feature: 'test-feature' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/features/test-feature/components/test-component/test-component.component.css',
        );
        expect(tree.files).toContain(
            '/libs/features/test-feature/components/test-component/test-component.component.html',
        );
        expect(tree.files).toContain(
            '/libs/features/test-feature/components/test-component/test-component.component.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/features/test-feature/components/test-component/test-component.component.ts',
        );
    });

    it('overrides angular component - page', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'component',
            { name: 'test-component', page: 'test-page' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/pages/test-page/components/test-component/test-component.component.css',
        );
        expect(tree.files).toContain(
            '/libs/pages/test-page/components/test-component/test-component.component.html',
        );
        expect(tree.files).toContain(
            '/libs/pages/test-page/components/test-component/test-component.component.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/pages/test-page/components/test-component/test-component.component.ts',
        );
    });
});
