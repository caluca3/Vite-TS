import { Router } from "express";
import { prisma } from "../utils/prismaClient.js";

export const routerPost = Router();
//  Obtener todas las categorias - publico
routerPost.get("/:userId", async (req, res = response) => {
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

routerPost.post("/create", async (req, res = response) => {
  const { title, content } = req.body;
  const post = await prisma.post.create({
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
  const post = await prisma.post.update({
    where: { id: +id },
    data: { published: true, content, title },
  });
  res.json({ post });
});

routerPost.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: { id: +id },
  });
  res.json({ post });
});
