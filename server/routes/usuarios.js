import { Router } from "express";
import { prisma } from "../utils/prismaClient.js";
import { UserService } from "../controllers/users/index.js";

export const routerUser = Router();
//* Obtener todas las categorias - publico

routerUser.get("/:userId", async (req, res = response) => {
  const { userId } = req.params;

  const posts = await prisma.post.findMany({
    where: {
      authorId: +userId,
    },
  });

  res.json({
    posts,
  });
});

routerUser.post("/create", async (req, res = response) => {
  const { title, content } = req.body;

  const post = await prisma.user.create({});
  res.json({ post });
});

routerUser.get("/post/:id", async (req, res = response) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: +id },
  });
  res.json({ post });
});

routerUser.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await prisma.post.update({
    where: { id: +id },
    data: { published: true, content, title },
  });
  res.json({ post });
});

routerUser.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  UserService.deleteUser(id);

  res.json({ post });
});

//* modificar routerPOST crud usuarios
//! TODO: Crear y separar controladores Usuarios
//TODO: Crear y separar controladores POSTS
//TODO: Iniciar sesion
//TODO: Crear DTO
//TODO: Subir el archivo correctamente
