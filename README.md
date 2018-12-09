# angular7-auth
Registration login with angular 7 - recover repo....

#ANGULAR 7 - USER AUTH PROJECT

-User registration and login 

In this project we'll go through of how to build a simple user registration and login system using Angular 7, TypeScript and webpack 4.


#STRUCTURE OF THE PROJECT

src
app
_components
alert.component.html
alert.component.ts
index.ts
_guards
auth.guard.ts
index.ts
_helpers
error.interceptor.ts
fake-backend.ts
jwt.interceptor.ts
index.ts
_models
user.ts
index.ts
_services
alert.service.ts
authentication.service.ts
user.service.ts
index.ts
home
home.component.html
home.component.ts
index.ts
login
login.component.html
login.component.ts
index.ts
register
register.component.html
register.component.ts
index.ts
app.component.html
app.component.ts
app.module.ts
app.routing.ts
index.html
main.ts
polyfills.ts
typings.d.ts
package.json
tsconfig.json
webpack.config.js


#RESUME Of PROJECT

The project structure has a folder per feature (home, login & register), while other shared/common code (services, models, guards, components & helpers) is placed in folders prefixed with an underscore "_" to easily differentiate between shared code and feature specific code, the prefix also groups shared component folders together at the top of the folder structure.

The index.ts files in each folder are barrel files that group the exported modules from a folder together so they can be imported using the folder path instead of the full module path and to enable importing multiple modules in a single import (e.g. import { AlertService, UserService, AuthenticationService } from '@/_services').

A path alias '@' has been configured in the tsconfig.json and webpack.config.js that maps to the '/src/app' directory. This allows imports to be relative to the '/src/app' folder by prefixing the import path with '@', removing the need to use long relative paths like import MyComponent from '../../../MyComponent'