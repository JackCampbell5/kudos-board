const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient()

import boardsToImport from './boards.json'

async function main() {
    await prisma.card.deleteMany()
    await prisma.board.deleteMany()

    await prisma.$executeRawUnsafe(`SELECT setval('Card_id_seq',1,false)`);
    await prisma.$executeRawUnsafe(`SELECT setval('Board_id_seq',1,false)`);

    const user1 =
    await Promise.all(boardsToImport.map(async ({title, category, author, icon, description, cards}) => {
       await prisma.board.create({
            data: {
                    title,
                    category,
                    author,
                    icon,
                    description,
                    cards:cards? {create: cards}:undefined
            },
          })
    }

    ))


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
