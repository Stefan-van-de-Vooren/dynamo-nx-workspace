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
- you don't run te schematic in the normal way ```ng g <schematic name>```

### option 2
- we add a schematic collection in tools/schematics. This collection is set as the default collection in th angular.json
- now we could add custum schematics to the folder ./tools/schematics.
 
 **cons:** 
 - schematics still not added into the Angular Console
 - the schematics needs to be compiled before anyone could use them
 
 ### wrap up
 should the source for the collection inside the mone repo, or should we add them in another repo and include them in the senses repo as NPM package?
