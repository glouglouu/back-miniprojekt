import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {

    // Note: this is optional
    await this.$connect()
    const user = await prisma.user.create({
      data: {
        email: 'ariadne@prisma.io',
        name: 'Ariadne',
        posts: {
          create: [
            {
              title: 'My first day at Prisma',
              categories: {
                create: {
                  name: 'Office',
                },
              },
            },
            {
              title: 'How to connect to a SQLite database',
              categories: {
                create: [{ name: 'Databases' }, { name: 'Tutorials' }],
              },
            },
          ],
        },
      },
    })
    const users = await prisma.user.findMany()
    return users;
  }

}