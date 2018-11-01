## folder structure
- When everything goes into the lib, how do we setup the structure. Should we use root folders inside the lib for 'pages', 'features' or 'shared'? or use a pre or post fix. For example 'transaction.page'? 

## extends schematic
- Which schematics should we extends? NX, Ionic or Angular. 
- Do we want devOps team to use the NX schematics, or decorate all schematics with our own Senses schematics?
- An schematic can be marked as private

## extends NX schematics
- find out if we want to add schematics to NX, or create our own schematics folder

## testing schematics
- We've created a npm script `test-schematics` which uses `jest` to test schematics (`jasmine` would also work, but this is aligned with the testing decisions taken by darwin/edison). It will execute all the spec files under `/tools/schematics/**`

    npm run test-schematics
