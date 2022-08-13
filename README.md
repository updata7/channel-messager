# channel-messager is the project that using Node,typescript,Koa and mongoose, enjoy it!

# prepare

To builde and run the project, you will need a few thing:

- Install [Node.js 13.0.1+](https://nodejs.org/en/)
- Install [mongo server v4.0.9+](https://www.mongodb.com/)

# Getting started

- Clone the repository

```bash
git clone --depth=1 https://github.com/updata7/channel-messager.git
```

- Install dependencies

```bash
cd channel-messager
npm install
```

- Build the project

```bash
npm run build
```

- Run the project

```bash
npm run dev
```

- Test the API

   Navigate to `http://localhost:8081/api/docs`, you should **see** and **test** the API!!!

  


The full folder structure of this proejct is explained below:

> **Note!** Make sure you have already built the proejct and using `npm run dev`

| Name               | Description                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **src/config**         | Contains config environment to be used by the config package, such as MongoDB URI, jwtSecret, and etc.                                                        |
| **dist**           | Contains the distributable (or output) from your TypeScript build                                                                                             |
| **node_modules**   | Contains all your npm dependencies                                                                                      |
| **src**            | Contains your source code that will be compiled to the dist dir                                                                                               |
| **src/middlewares** | Contains the middlewares to intercept requests                                                                                                                |
| **src/model**     | Model define Mongoose schemas that will be used in storing and retrieving data from MongoDB                                                                  |
| **src/engine**      | This field will direct use model                      |
| **src/handler** | This field will be used in router and call the **engine** |
| **src/router** | The router for client call |
| **src/swagger** | Swagger UI for API |
| **src/utils** | Some common internal interfaces |
| **src/bin/server.ts** | Entry point to your Koa project                                                                                                                      |
| **src/app.ts** | The helper file be used by server.ts |
| package.json       | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                                                    |
| tsconfig.json      | Config settings for compiling server code written in TypeScript                                                                                               |
