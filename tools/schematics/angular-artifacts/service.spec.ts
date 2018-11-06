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

    it('overrides angular service - shared', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'service',
            { name: 'test-service' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/shared/services/test-service.service.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/shared/services/test-service.service.ts',
        );
    });

    it('overrides angular service - feature', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'service',
            { name: 'test-service', feature: 'test-feature' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/features/test-feature/services/test-service.service.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/features/test-feature/services/test-service.service.ts',
        );
    });

    it('overrides angular service - page', () => {
        const runner = new SchematicTestRunner(
            'senses2-angular-artifacts',
            collectionPath,
        );
        const tree = runner.runSchematic(
            'service',
            { name: 'test-service', page: 'test-page' },
            appTree,
        );

        expect(tree.files.length).toBeGreaterThan(0);

        expect(tree.files).toContain(
            '/libs/pages/test-page/services/test-service.service.spec.ts',
        );
        expect(tree.files).toContain(
            '/libs/pages/test-page/services/test-service.service.ts',
        );
    });
});
