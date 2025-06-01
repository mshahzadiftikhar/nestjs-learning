# nestjs-learning
## Installation and Project Creation
npm should be installed - https://nodejs.org/en

```
$ npm i -g @nestjs/cli
$ nest new nestjs-learning
```

This will create a new project named nestjs-learning which will contains a set of files. 

src/ - Main Application Code
 - main.ts  
 Entry point of the application (like index.js in other Node.js apps). It bootstraps the application using the root module (AppModule). And also specifies the port on which NestJS backend will run, 3000 in this case.
 - app.module.ts  
The root module of the application. Registers controllers and providers (services). Think of it like the glue that ties everything together.
 - app.controller.ts   
 A basic controller to handle incoming HTTP requests (e.g., GET /). NestJS uses decorators like @Controller and @Get for routing.
  - app.service.ts  
A service provider that contains business logic. Injected into the controller. Acts as a leyers between controller and DB.
 - app.controller.spec.ts  
 Class for writing test cases of controller

 test/ - End-to-End Tests
 - app.e2e-spec.ts  
An end-to-end test example.Tests how the application behaves when running as a whole (HTTP requests, etc)

## Resolve Dependencies

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# After successfull run, nestJS will run at http://localhost:3000/
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Adding New Module 
Lets add a new module named task. Generally there are following things we need to create: 
 - service
 - controller
 - module
 - Unit tests for service and controller

Details can be found on this page: [New Module Details](./docs/new-module.md)

## Integrating Postgres Database

Lets access data from postgres database in our service layer.  
Details can be found on this page: [Postgres Integration](./docs/postgres-integration.md)

## HTTP Requests

Lets go through different HTTP requests like GET, POST, PUT, PATCH, DELETE  
Details can be found on this page: [Http Requests](./docs/http-requests.md)