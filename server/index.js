import express from "express";
import cors from "cors";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      posts: "/api/posts",
      usuarios: "/api/usuarios",
    };
    // Middlewares
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();
  }
  middlewares() {
    // CORS
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // Directorio Público
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.paths.posts, require("../routes/posts"));
    this.app.use(this.paths.usuarios, require("../routes/usuarios"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

const server = new Server();

server.listen();
