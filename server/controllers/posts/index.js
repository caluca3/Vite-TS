import {} from '@prisma/client'
import { prisma } from "../../utils/prismaClient";

class UserController {
  async findUser(userId) {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async deleteUser(userId) {
    const user = this.findUser(userId);

    if (!user) throw new Error("No user in the request");

    return await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }

  async findOrCreate(email, name) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user)
      return await prisma.user.create({
        data: {
          email,
          name,
        },
      });

    return user;
  }
}

export const UserService = new UserController();
