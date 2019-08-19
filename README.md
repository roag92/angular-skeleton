Angular Skeleton
==============

This skeleton is a base to start a new angular project with a express server for create in easy way web applications. (For me works)

### Requiriments ###

The requiriments need to run the application are:

 * Node >= v6.10.3
 * npm >= v5.0.3

### Scripts ###

Below this you can find some commands to execute inside the project to run some task like up the serve, build the dist app, etc.

 * `npm run serve`.- Runs the serve over the dist folder (Production) on the port 8080
 * `npm run serve:develop`.- Runs the serve over the public folder (Development) on the port 8080
 * `npm run build`.- Transpiles and generates a minified standalone bundle with all files necessaries to deploy the application.
 * `npm run build:develop`.- Transpiles and generates a standalone bundle with all files necessaries to deploy the application in develop enviroment.
 * `npm run build:live`.- Transpiles and generates a standalone bundle with all files necessaries to deploy the application in develop enviroment on the port 4200 with a nice live reloading and our back-end will be proxied on the port 8080.
 * `npm run test`.- Runs a unit tetint using Karma and Jasmine also uses a proxy to request our back-end.
