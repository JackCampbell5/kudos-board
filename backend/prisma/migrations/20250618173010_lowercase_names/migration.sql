/*
  Warnings:

  - You are about to drop the `Board` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_boardId_fkey";

-- DropTable
DROP TABLE "Board";

-- DropTable
DROP TABLE "Card";

-- CreateTable
CREATE TABLE "board" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "boardId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "author" TEXT,
    "icon" TEXT NOT NULL,
    "upvoteCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "board_id_key" ON "board"("id");

-- CreateIndex
CREATE UNIQUE INDEX "card_id_key" ON "card"("id");

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
