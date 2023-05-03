//import {Post} from '@prisma/client'
import {prisma} from '../../utils/prismaClient.js'


class PostController {
  async findPost(userId) {
    return await prisma.post.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async deletePost(userId) {
    const user = this.findUser(userId);

    if (!user) throw new Error("No user in the request");

    return await prisma.post.delete({
      where: {
        id: userId,
      },
    });
  }

  async findOrCreate(id,title) {
    const post = await prisma.post.findUnique({
      where: {
        id,
        title
      },
    });

    if (!post)
      return await prisma.post.create({
        data: {
          id,
          title,
          content,
          images,
        },
      });

    return post;
  }

  async updatePost(id,title,content){
    const post = await prisma.post.update({
      where:{
        id,
        title,
        content
      }
    })
    if (!post) {
      console.log('Not find post');
    }

    return post;
  }
}

export const PostServices = new PostController();
