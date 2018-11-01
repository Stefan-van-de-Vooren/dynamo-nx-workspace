#What did we do

- create git repo with a NX workspace
- create git repo with the schematics
- create a schematics which use teh NX schematics
- create a app schematic
- create a page schematic
- get the unit tests working
- found out how to debug a schematic


## add custom schematic
### option 1
- We add a custom schematic with ```ng generate @nrwl/schematics:workspace-schematic <name schematic>```
- we run the schematic ```npm run workspace-schematic <name schematic> --name <name>```

**cons:** 
- you don't run te schematic in the normal way ```ng g <schematic name>``` (nice guide to get it working: https://stackoverflow.com/questions/51610745/nrwl-nx-workspace-specific-schematics)
- After setting up the project to execute schematics without namespace, `ng g` only list our schematics as the one available -> we can proxy (extend) whatever schematics we want to include to make them available to `ng g` (have a look to collections.json#directive schematic)

### option 2
- we add a schematic collection in tools/schematics. This collection is set as the default collection in the angular.json file.
- now we could add custom schematics to the folder ./tools/schematics.
 
 **cons:** 
 - the schematics needs to be compiled before anyone could use them
 
 #### wrap up
 should the source for the collection inside the mono repo, or should we add them in another repo and include them in the senses repo as NPM package?


##  TypeScript issues
We encountered some ‘weird’ TypeScript errors: 
```bash
error TS2345: Argument of type 'import("/dynamo-schematics/node_modules/@schematics/angular/node_modules/typescript/lib/typescript").Node' is not assignable to parameter of type 'import("/dynamo-schematics/node_modules/typescript/lib/typescript").Node'.
  Types of property 'kind' are incompatible.
```
It turns out the package ‘@schematics/angular’ including its own TypeScript version inside the node_modules/@schematics/angular/node_modules folder. This version MUST be the same as the TypeScript version in the project.

We resolved the issue by updating our TypeScript version inside the package.json. It is also possible to remove the node_modules/@schematics/angular/node_modules folder. It is not clear why Angular/schematics including the TypeScript definition.

# Debugging
To debugging a schematic use:
```bash 
 node --inspect-brk $(which schematics) .:<name-schematic> --params
 ```
 you could add `debugger;` inside your script to automatically break.
 Use chrome://inspect/ or setup a VS or WebStorm debug session to debug your scripts. 
 For WebStorm see: https://www.jetbrains.com/help/webstorm/run-debug-configuration-node-js-remote-debug.html 


## Angular Console
The Angular Console is really useful to apply schematics. Unfortunately for now the console only show the NX schematics and the Angular schematics. 
There’s a open issue for adding other schematics:
- https://github.com/nrwl/angular-console/issues/142
- https://github.com/nrwl/angular-console/issues/156 



## Examples 

    ng g test-schematics --name libtest
    ng g dynamo-app --name app-test
    ng g dynamo-page --name app-page
