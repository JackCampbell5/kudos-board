const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

const express = require('express')
const router = express.Router()

  router.get("/", async (req, res) => {
    const findBoards = await prisma.Board.findMany()
    console.log(findBoards)
    res.json(findBoards);
  });

  router.get("/:boardID/cards", async (req, res) => {
    const { boardID } = req.params
    const findCards = await prisma.Card.findMany({
      where: {
        boardId: parseInt(boardID),
      },
    })
    res.json(findCards);
  });

  router.post('/add', async (req, res) => {
    const boardData = req.body
    const newBoard = {
        ...boardData,
    }
    const createBoard = await prisma.Board.create({
      data: newBoard});
    res.status(201).json(createBoard)
  })

  router.post('/:boardID/cards/add', async (req, res) => {
    const cardData = req.body
    const { boardID } = req.params
    const newCard = {
        boardId: parseInt(boardID),
        ...cardData,
    }

    const createCard = await prisma.Card.create({
      data: newCard});
    res.status(201).json(createCard)
  })


  router.delete('/delete/:boardID', async (req, res) => {
    const { boardID } = req.params
    try{
    const deleteOne = await prisma.Board.delete({
      where: {
        id: parseInt(boardID),
      },
    })
    res.status(204).send()

  }catch{
    res.status(404).send('Board not found')

  }
  })

  router.delete('/:boardID/cards/delete/:cardID', async (req, res) => {
    const { boardID,cardID } = req.params

    try{
      const deleteOne = await prisma.Card.delete({
        where: {
          id: parseInt(cardID),
        },
      })
      res.status(204).send()

    }catch{
      res.status(404).send('Board not found')

    }
  })

  module.exports = router
