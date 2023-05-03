import { Router } from "express";

import { PostServices } from "../controllers/posts/index.js";
import { prisma } from "../utils/prismaClient.js";

export const routerPost = Router();
//* Obtener todas las categorias - publico

routerPost.get("/:userId", async (req, res = response) => {
  const { userId } = req.params;
  const  posts = PostServices.findPost(userId)
  res.json({posts});
});

routerPost.post("/upload", function (req, res) {
  console.log("Hola");

  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }

  res.json({ code: 200 });
});

routerPost.post("/create", async (req, res = response) => {
  const { title, content } = req.body;
  const post = await prisma.post.create({
  //const posts = PostController.findOrCreate(id,title)
    data: {
      title,
      content,
      published: false,
      author: { connect: { id: 1 } },
    },
  });
  res.json({ post });
});

routerPost.get("/post/:id", async (req, res = response) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: +id },
  });
  res.json({ post });
});

routerPost.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = PostServices.updatePost(id,title,content)
  res.json({ post });
});

routerPost.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const post = PostServices.deletePost(id)
  res.json({ post });
});
