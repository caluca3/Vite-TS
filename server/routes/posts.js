import { Router } from "express";
import { prisma } from "../utils/prismaClient";

const router = Router();
//  Obtener todas las categorias - publico
router.get("/:userId", async (req, res = response) => {
  const { userId } = req.params;

  const posts = prisma.posts.findMany({
    where: {
      authorId: userId,
    },
  });

  res.json({
    posts,
  });
});
