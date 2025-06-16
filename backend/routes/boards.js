const express = require('express')
const router = express.Router()

let kudosBoards = [
    {
        id: 1,
        title: "Team Success",
        category: "celebration",
        author: "Alice Johnson",
        icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
        description: "Celebrating the team's outstanding success and achievements in the recent project."

    },
    {
        id: 2,
        title: "Great Job on the Project",
        category: "thanks",
        author: "Bob Smith",
        icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
        description: "A big thank you to everyone for their hard work and dedication on the project."

    },
    {
        id: 3,
        title: "Daily Inspiration",
        category: "inspo",
        author: "Carol Lee",
        icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
        description: "Kickstart your day with a dose of daily inspiration and motivation."
    },
    {
        id: 4,
        title: "Recent Achievements",
        category: "recent",
        author: "David Brown",
        icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
        description: "Highlighting the most recent achievements and milestones reached by our team."
    },
    {
        id: 5,
        title: "Birthday Bash",
        category: "celebration",
        author: "Eve Davis",
        icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
        description: "Expressing gratitude for the relentless hard work and commitment shown by the team."
    },
    {
        id: 6,
        title: "Thank You for Your Hard Work",
        category: "thanks",
        author: "Frank Wilson",
        icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
        description: "Join us in celebrating the birthdays of our amazing team members this month."
    },
    {
        id: 7,
        title: "Motivational Monday",
        category: "inspo",
        author: "Grace Kim",
        icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
        description: "Start your week with motivational quotes and stories to keep you inspired."
    },
    {
        id: 8,
        title: "Weekly Highlights",
        category: "recent",
        author: "Henry White",
        icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
        description: "A recap of the week's highlights and key moments worth celebrating."
    }
  ];


  router.get("/", (req, res) => {
    res.json(kudosBoards);
  });


  router.post('/add', (req, res) => {
    const boardData = req.body
    const newBoard = {
        id: kudosBoards.length + 1,
        ...boardData,
    }
    kudosBoards.push(newBoard)
    res.status(201).json(newBoard)
  })

  router.delete('/delete/:boardID', (req, res) => {
    const { boardID } = req.params
    console.log(boardID)
    const initialLength = kudosBoards.length
    kudosBoards = kudosBoards.filter(pets => pets.id !== parseInt(boardID))

    if (kudosBoards.length < initialLength) {
      res.status(204).send()
    } else {
      res.status(404).send('Board not found')
    }
  })

  module.exports = router
