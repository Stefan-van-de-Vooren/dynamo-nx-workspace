#What did we do

- create a NX workspace
- have a look into the NX schematics
- generate a default nx-app

## add custom schematic
### option 1
- We add a custom schematic with ```ng generate @nrwl/schematics:workspace-schematic <name schematic>```
- we run the schematic ```npm run workspace-schematic <name schematic> --name <name>```

**cons:** 
- custom schematics are not added into the Angular Console
- you don't run te schematic in the normal way ```ng g <schematic name>``` (nice guide to get it working: https://stackoverflow.com/questions/51610745/nrwl-nx-workspace-specific-schematics)
- After setting up the project to execute schematics without namespace, `ng g` only list our schematics as the one available -> we can proxy (extend) whatever schematics we want to include to make them available to `ng g` (have a look to collections.json#directive schematic)

### option 2
- we add a schematic collection in tools/schematics. This collection is set as the default collection in the angular.json file.
- now we could add custom schematics to the folder ./tools/schematics.
 
 **cons:** 
 - schematics still not added into the Angular Console
    - is open issues in Console: https://github.com/nrwl/angular-console/issues/142, https://github.com/nrwl/angular-console/issues/156 
 - the schematics needs to be compiled before anyone could use them
 
 ### wrap up
 should the source for the collection inside the mono repo, or should we add them in another repo and include them in the senses repo as NPM package?


## Examples 

    ng g test-schematics --name libtest
    ng g dynamo-app --name app-test
    ng g dynamo-page --name app-page
