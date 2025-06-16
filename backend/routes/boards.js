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


let kudosCards = [
  {
    id: 1,
    title: "Great Teamwork",
    message: "Thanks for collaborating so effectively on the project!",
    author: "Alice",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 15
  },
  {
    id: 2,
    title: "Outstanding Leadership",
    message: "Your guidance has been invaluable to the team.",
    author: "Bob",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 20
  },
  {
    id: 3,
    title: "Creative Problem Solving",
    message: "Your innovative solutions helped us overcome major challenges.",
    author: "Charlie",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 10
  },
  {
    id: 4,
    title: "Excellent Communication",
    message: "Your clear communication made a big difference.",
    author: "David",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 12
  },
  {
    id: 5,
    title: "Inspiring Dedication",
    message: "Your dedication to the project is truly inspiring.",
    author: "Eve",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 18
  },
  {
    id: 6,
    title: "Remarkable Initiative",
    message: "Your initiative in tackling tasks is commendable.",
    author: "Frank",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 14
  },
  {
    id: 7,
    title: "Positive Attitude",
    message: "Your positive attitude is contagious and uplifting.",
    author: "Grace",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 22
  },
  {
    id: 8,
    title: "Exceptional Support",
    message: "Your support has been crucial to our success.",
    author: "Hannah",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 17
  },
  {
    id: 9,
    title: "Amazing Creativity",
    message: "Your creativity has brought fresh ideas to the table.",
    author: "Ian",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 19
  },
  {
    id: 10,
    title: "Fantastic Problem Solver",
    message: "Your problem-solving skills are exceptional.",
    author: "Jack",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZqb2Z1eWFwODJqY3BzYjB5amdvdWIyOTdmMmxvaGYxcXp2OGQ5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ef72To2kJgyAC1FdxK/giphy.gif",
    upvoteCount: 21
  }
];

  router.get("/", (req, res) => {
    res.json(kudosBoards);
  });

  router.get("/:boardID/cards", (req, res) => {
    const { boardID } = req.params
    res.json(kudosCards);
  });

  router.post('/:boardID/cards/add', (req, res) => {
    const cardData = req.body
    const newCard = {
        id: kudosCards.length + 1,
        upvoteCount: 0,
        ...cardData,
    }
    kudosCards.push(newCard)
    res.status(201).json(newCard)
  })

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
    const initialLength = kudosBoards.length
    kudosBoards = kudosBoards.filter(board => board.id !== parseInt(boardID))

    if (kudosBoards.length < initialLength) {
      res.status(204).send()
    } else {
      res.status(404).send('Board not found')
    }
  })

  router.delete('/:boardID/cards/delete', (req, res) => {
    const { boardID } = req.params
    const initialLength = kudosCards.length
    kudosCards = kudosCards.filter(card => card.id !== parseInt(boardID))

    if (kudosCards.length < initialLength) {
      res.status(204).send()
    } else {
      res.status(404).send('Board not found')
    }
  })

  module.exports = router
