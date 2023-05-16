import { PrismaClient } from '@prisma/client';

// initialize prisma client
const prisma = new PrismaClient();

const insert = async () => {
  await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: 'Admin@123',
    },
  });
};

insert()
  .catch((err) => {
    console.error(err);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
