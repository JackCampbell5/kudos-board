const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

const express = require('express')
const router = express.Router()

  router.get("/", async (req, res) => {
    const findBoards = await prisma.board.findMany()
    res.json(findBoards);
  });

  router.get("/:boardID/cards", async (req, res) => {
    const { boardID } = req.params
    const findCards = await prisma.card.findMany({
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
    const createBoard = await prisma.board.create({
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

    const createCard = await prisma.card.create({
      data: newCard});
    res.status(201).json(createCard)
  })


  router.delete('/delete/:boardID', async (req, res) => {
    const { boardID } = req.params
    try{

    await prisma.card.deleteMany({
      where: {
        boardId: parseInt(boardID),
      },
    });

    await prisma.board.delete({
      where: {
        id: parseInt(boardID),
      },
    })
    res.status(204).send()

  }catch{
    res.status(404).send('Board not found')

  }
  })

  router.delete('/:boardID/cards/:cardID/delete', async (req, res) => {
    const { boardID,cardID } = req.params
    console.log(cardID)

    try{
      const deleteOne = await prisma.card.delete({
        where: {
          id: parseInt(cardID),
        },
      })
      res.status(204).send()

    }catch{
      res.status(404).send('Board not found')

    }
  })

  router.put('/:boardID/cards/:cardID/voteUp', async (req, res) => {
    const { boardID,cardID } = req.params
    try{
    const updateOne = await prisma.card.update({
      where: {
        id: parseInt(cardID),
      },

      data: {
        upvoteCount: {
          increment: 1, // ? increment, decrement, multiply, divide, append, prepend, delete, remove, disconnect, connect, set
        },
      },
    })
    res.json(updateOne)
    res.status(204).send()
  }catch{
    res.status(404).send('Card not found')
  }
  })



  router.put('/:boardID/cards/:cardID/pin/:pinNum', async (req, res) => {
    const { boardID,cardID,pinNum } = req.params
    try{
    const updateOne = await prisma.card.update({
      where: {
        id: parseInt(cardID),
      },

      data: {
        pinned: parseInt(pinNum)
      },
    })
    res.json(updateOne)
  }catch{
    res.status(404).send('Card not found')
  }
  })


  router.put('/:boardID/cards/:cardID/unpin', async (req, res) => {
    const { boardID,cardID } = req.params
    try{
    const updateOne = await prisma.card.update({
      where: {
        id: parseInt(cardID),
      },

      data: {
        pinned: 0
      },
    })
    res.json(updateOne)
  }catch{
    res.status(404).send('Card not found')
  }
  })

  module.exports = router
