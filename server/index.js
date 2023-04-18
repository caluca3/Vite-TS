//import cors from "cors";
//import express from "express";
//import { routerPost } from "./routes/posts";
//
//const { express } = require("express");
//
//class Server {
//  constructor() {
//    this.app = express();
//    this.port = process.env.PORT;
//    this.paths = {
//      posts: "/api/posts",
//      usuarios: "/api/usuarios",
//    };
//    // Middlewares
//    this.middlewares();
//    // Rutas de mi aplicación
//    this.routes();
//  }
//  middlewares() {
//    // CORS
//    this.app.use(cors());
//    // Lectura y parseo del body
//    this.app.use(express.json());
//    // Directorio Público
//    this.app.use(express.static("public"));
//  }
//  routes() {
//    this.app.use(this.paths.posts, routerPost);
//    //this.app.use(this.paths.usuarios, require("../routes/usuarios"));
//  }
//  listen() {
//    this.app.listen(this.port, () => {
//      console.log("Servidor corriendo en puerto", this.port);
//    });
//  }
//}
//
//const server = new Server();
//
//server.listen();

import express from "express";
import cors from "cors";
import { routerPost } from "./routes/posts.js";

const port = process.env.PORT;

export async function createServer() {
  const app = express();

  const paths = {
    posts: "/api/posts",
  };

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(paths.posts, routerPost);

  return { app };
}

createServer().then(({ app }) =>
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  })
);
