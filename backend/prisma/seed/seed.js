const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient()

// import boardsToImport from './boards.json'
// TODO Dynamically get boards from a file

let boardsToImport = [
  {
      title: "Team Success",
      category: "celebration",
      author: "Alice Johnson",
      icon: "https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif",
      description: "Celebrating the team's outstanding success and achievements in the recent project.",
      cards: [
          {
              title: "Great Teamwork",
              message: "Thanks for collaborating so effectively on the project!",
              author: "Alice",
              icon: "https://media.giphy.com/media/Vi5TUmZz8LZb95j2xb/giphy.gif",
              upvoteCount: 15
          },
          {
              title: "Outstanding Leadership",
              message: "Your guidance has been invaluable to the team.",
              author: "Bob",
              icon: "https://media.giphy.com/media/DIYVI7Iz4dmnu/giphy.gif",
              upvoteCount: 20
          },
          {
              title: "Creative Problem Solving",
              message: "Your innovative solutions helped us overcome major challenges.",
              author: "Charlie",
              icon: "https://media.giphy.com/media/3GtGJYx1uPZM4/giphy.gif",
              upvoteCount: 10
          },
          {
              title: "Excellent Communication",
              message: "Your clear communication made a big difference.",
              author: "David",
              icon: "https://media.giphy.com/media/ToMjGppLes0ENI5osCc/giphy.gif",
              upvoteCount: 12
          },
          {
              title: "Inspiring Dedication",
              message: "Your dedication to the project is truly inspiring.",
              author: "Eve",
              icon: "https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif",
              upvoteCount: 18
          },
          {
              title: "Remarkable Initiative",
              message: "Your initiative in tackling tasks is commendable.",
              author: "Frank",
              icon: "https://media.giphy.com/media/1hMhl5fpuLldDqj0Ey/giphy.gif",
              upvoteCount: 14
          },
          {
              title: "Positive Attitude",
              message: "Your positive attitude is contagious and uplifting.",
              author: "Grace",
              icon: "https://media.giphy.com/media/5xtDarEgBDjEoWo6VRS/giphy.gif",
              upvoteCount: 22
          },
          {
              title: "Exceptional Support",
              message: "Your support has been crucial to our success.",
              author: "Hannah",
              icon: "https://media.giphy.com/media/1DhUzOhxkLI1G/giphy.gif",
              upvoteCount: 17
          },
          {
              title: "Amazing Creativity",
              message: "Your creativity has brought fresh ideas to the table.",
              author: "Ian",
              icon: "https://media.giphy.com/media/LCdPNT81vlv3y/giphy.gif",
              upvoteCount: 19
          },
          {
              title: "Fantastic Problem Solver",
              message: "Your problem-solving skills are exceptional.",
              author: "Jack",
              icon: "https://media.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif",
              upvoteCount: 21
          }
      ]
  },
  {
      title: "Great Job on the Project",
      category: "thanks",
      author: "Bob Smith",
      icon: "https://media.giphy.com/media/3GtGJYx1uPZM4/giphy.gif",
      description: "A big thank you to everyone for their hard work and dedication on the project.",
      cards: [
          {
              title: "Appreciation Note",
              message: "Your efforts have not gone unnoticed. Thank you!",
              author: "Bob",
              icon: "https://media.giphy.com/media/IL7hXX77O5OIU/giphy.gif",
              upvoteCount: 25
          },
          {
              title: "Team Spirit",
              message: "The team spirit was amazing throughout the project.",
              author: "Alice",
              icon: "https://media.giphy.com/media/7DzlajZNY5D0I/giphy.gif",
              upvoteCount: 30
          }
      ]
  },
  {
      title: "Daily Inspiration",
      category: "inspo",
      author: "Carol Lee",
      icon: "https://media.giphy.com/media/1DhUzOhxkLI1G/giphy.gif",
      description: "Kickstart your day with a dose of daily inspiration and motivation.",
      cards: [
          {
              title: "Morning Motivation",
              message: "Start your day with a positive mindset.",
              author: "Carol",
              icon: "https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif",
              upvoteCount: 40
          },
          {
              title: "Quote of the Day",
              message: "Believe you can and you're halfway there.",
              author: "Theodore Roosevelt",
              icon: "https://media.giphy.com/media/5xtDarEgBDjEoWo6VRS/giphy.gif",
              upvoteCount: 35
          },
          {
              title: "Daily Challenge",
              message: "Take a moment to reflect on your achievements.",
              author: "Carol",
              icon: "https://media.giphy.com/media/1hMhl5fpuLldDqj0Ey/giphy.gif",
              upvoteCount: 28
          }
      ]
  },
  {
      title: "Recent Achievements",
      category: "celebration",
      author: "David Brown",
      icon: "https://media.giphy.com/media/Vi5TUmZz8LZb95j2xb/giphy.gif",
      description: "Highlighting the most recent achievements and milestones reached by our team.",
      cards: [
          {
              title: "Milestone Reached",
              message: "We have successfully completed the first phase of the project.",
              author: "David",
              icon: "https://media.giphy.com/media/DIYVI7Iz4dmnu/giphy.gif",
              upvoteCount: 50
          },
          {
              title: "New Record",
              message: "Our team set a new record for project completion time.",
              author: "Eve",
              icon: "https://media.giphy.com/media/3GtGJYx1uPZM4/giphy.gif",
              upvoteCount: 45
          }
      ]
  },
  {
      title: "Birthday Bash",
      category: "celebration",
      author: "Eve Davis",
      icon: "https://media.giphy.com/media/ToMjGppLes0ENI5osCc/giphy.gif",
      description: "Expressing gratitude for the relentless hard work and commitment shown by the team.",
      cards: [
          {
              title: "Happy Birthday!",
              message: "Wishing you a fantastic year ahead.",
              author: "Eve",
              icon: "https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif",
              upvoteCount: 60
          }
      ]
  },
  {
      title: "Thank You for Your Hard Work",
      category: "thanks",
      author: "Frank Wilson",
      icon: "https://media.giphy.com/media/1hMhl5fpuLldDqj0Ey/giphy.gif",
      description: "Join us in celebrating the birthdays of our amazing team members this month.",
      cards: [
          {
              title: "Gratitude",
              message: "Your hard work and dedication are truly appreciated.",
              author: "Frank",
              icon: "https://media.giphy.com/media/5xtDarEgBDjEoWo6VRS/giphy.gif",
              upvoteCount: 55
          },
          {
              title: "Team Appreciation",
              message: "Thank you for being an integral part of our team.",
              author: "Grace",
              icon: "https://media.giphy.com/media/1DhUzOhxkLI1G/giphy.gif",
              upvoteCount: 48
          }
      ]
  },
  {
      title: "Motivational Monday",
      category: "inspo",
      author: "Grace Kim",
      icon: "https://media.giphy.com/media/LCdPNT81vlv3y/giphy.gif",
      description: "Start your week with motivational quotes and stories to keep you inspired.",
      cards: [
          {
              title: "Monday Motivation",
              message: "Every day is a new opportunity to grow.",
              author: "Grace",
              icon: "https://media.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif",
              upvoteCount: 65
          },
          {
              title: "Inspiring Story",
              message: "Read about how small steps lead to big achievements.",
              author: "Henry",
              icon: "https://media.giphy.com/media/3GtGJYx1uPZM4/giphy.gif",
              upvoteCount: 70
          }
      ]
  },
  {
      title: "Weekly Highlights",
      category: "celebration",
      author: "Henry White",
      icon: "https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif",
      description: "A recap of the week's highlights and key moments worth celebrating.",
      cards: [
          {
              title: "Top Performer",
              message: "Congratulations to our top performer of the week!",
              author: "Henry",
              icon: "https://media.giphy.com/media/5xtDarEgBDjEoWo6VRS/giphy.gif",
              upvoteCount: 80
          },
          {
              title: "Project Update",
              message: "We are on track to meet our project goals.",
              author: "David",
              icon: "https://media.giphy.com/media/1hMhl5fpuLldDqj0Ey/giphy.gif",
              upvoteCount: 75
          }
      ]
  },
  {
      title: "Innovation Hub",
      category: "innovation",
      author: "Alice Johnson",
      icon: "https://media.giphy.com/media/8OJdqYqN1Nii3UTD6l/giphy.gif",
      description: "Showcasing innovative ideas and breakthroughs.",
      cards: [
          {
              title: "New Idea",
              message: "A groundbreaking idea that could change everything.",
              author: "Alice",
              icon: "https://media.giphy.com/media/2csuIJj6TmuKA/giphy.gif",
              upvoteCount: 30
          },
          {
              title: "Creative Solution",
              message: "An innovative solution to a longstanding problem.",
              author: "Bob",
              icon: "https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.gif",
              upvoteCount: 25
          }
      ]
  },
  {
      title: "Team Building",
      category: "teamwork",
      author: "Bob Smith",
      icon: "https://media.giphy.com/media/RoFXqXWN639Qs/giphy.gif",
      description: "Activities and events to strengthen team bonds.",
      cards: [
          {
              title: "Outdoor Adventure",
              message: "A fun day out to build team spirit.",
              author: "Carol",
              icon: "https://media.giphy.com/media/12zyJFTYPuMQI8/giphy.gif",
              upvoteCount: 40
          },
          {
              title: "Team Lunch",
              message: "A casual lunch to foster team relationships.",
              author: "David",
              icon: "https://media.giphy.com/media/2YQr5RmVZMj6g/giphy.gif",
              upvoteCount: 35
          },
          {
              title: "Workshop",
              message: "A workshop to enhance team skills.",
              author: "Eve",
              icon: "https://media.giphy.com/media/13mxP6bXy9lR16/giphy.gif",
              upvoteCount: 28
          }
      ]
  },
  {
      title: "Customer Feedback",
      category: "feedback",
      author: "Carol Lee",
      icon: "https://media.giphy.com/media/xUA7aS8zKYFHbng6NW/giphy.gif",
      description: "Gathering and analyzing customer feedback.",
      cards: [
          {
              title: "Positive Review",
              message: "A customer praised our service.",
              author: "Frank",
              icon: "https://media.giphy.com/media/xUA7aPhCAs5QRvMMJa/giphy.gif",
              upvoteCount: 50
          }
      ]
  },
  {
      title: "Health and Wellness",
      category: "wellness",
      author: "David Brown",
      icon: "https://media.giphy.com/media/LcGFscTzOn9xm/giphy.gif",
      description: "Promoting health and wellness in the workplace.",
      cards: [
          {
              title: "Yoga Session",
              message: "Join us for a relaxing yoga session.",
              author: "Grace",
              icon: "https://media.giphy.com/media/25kLnBQQ1sG4M/giphy.gif",
              upvoteCount: 60
          },
          {
              title: "Healthy Eating",
              message: "Tips for maintaining a balanced diet.",
              author: "Henry",
              icon: "https://media.giphy.com/media/vadsqiBwAM18c/giphy.gif",
              upvoteCount: 55
          }
      ]
  },
  {
      title: "Tech Updates",
      category: "technology",
      author: "Eve Davis",
      icon: "https://media.giphy.com/media/NdStEolhF6gMgnYIoU/giphy.gif",
      description: "Latest updates and news in technology.",
      cards: [
          {
              title: "New Software Release",
              message: "Check out the features of our latest software.",
              author: "Ian",
              icon: "https://media.giphy.com/media/XcR9WWSArHodtadond/giphy.gif",
              upvoteCount: 70
          },
          {
              title: "Tech Conference",
              message: "Highlights from the recent tech conference.",
              author: "Jack",
              icon: "https://media.giphy.com/media/JIJP1LCAtxzuCvmvIa/giphy.gif",
              upvoteCount: 65
          },
          {
              title: "Gadget Review",
              message: "A review of the latest gadgets in the market.",
              author: "Alice",
              icon: "https://media.giphy.com/media/oEK6WBsejSme4/giphy.gif",
              upvoteCount: 58
          }
      ]
  },
  {
      title: "Sustainability Efforts",
      category: "sustainability",
      author: "Frank Wilson",
      icon: "https://media.giphy.com/media/T1E5u35uWZDnq/giphy.gif",
      description: "Our initiatives towards a sustainable future.",
      cards: [
          {
              title: "Recycling Program",
              message: "Join our recycling program to reduce waste.",
              author: "Grace",
              icon: "https://media.giphy.com/media/8Dbf51V9ZyEZW/giphy.gif",
              upvoteCount: 80
          },
          {
              title: "Energy Conservation",
              message: "Tips to conserve energy in the office.",
              author: "Henry",
              icon: "https://media.giphy.com/media/xqklsTVVXhPa/giphy.gif",
              upvoteCount: 75
          }
      ]
  },
  {
      title: "Leadership Insights",
      category: "leadership",
      author: "Grace Kim",
      icon: "https://media.giphy.com/media/Jb90XJYZbZGvK/giphy.gif",
      description: "Insights and tips on effective leadership.",
      cards: [
          {
              title: "Leadership Workshop",
              message: "Join our workshop to enhance your leadership skills.",
              author: "Ian",
              icon: "https://media.giphy.com/media/VSRSd6I6OTw8ywt6Xt/giphy.gif",
              upvoteCount: 90
          },
          {
              title: "Mentorship Program",
              message: "Become a mentor and guide future leaders.",
              author: "Jack",
              icon: "https://media.giphy.com/media/44F9m2Uaonygg/giphy.gif",
              upvoteCount: 85
          }
      ]
  },
  {
      title: "Cultural Events",
      category: "culture",
      author: "Henry White",
      icon: "https://media.giphy.com/media/l4FGtoprq7U3UAgtW/giphy.gif",
      description: "Celebrating cultural diversity and events.",
      cards: [
          {
              title: "Cultural Festival",
              message: "Join us for a celebration of cultural diversity.",
              author: "Alice",
              icon: "https://media.giphy.com/media/a0so7RIWDZBQc/giphy.gif",
              upvoteCount: 100
          },
          {
              title: "International Cuisine Day",
              message: "Experience cuisines from around the world.",
              author: "Bob",
              icon: "https://media.giphy.com/media/9J2wGiEnQPPLa/giphy.gif",
              upvoteCount: 95
          }
      ]
  },
  {
      title: "Employee Spotlights",
      category: "recognition",
      author: "Ian Thompson",
      icon: "https://media.giphy.com/media/WteKbag35EBfq/giphy.gif",
      description: "Highlighting the achievements of our team members.",
      cards: [
          {
              title: "Employee of the Month",
              message: "Congratulations to our employee of the month!",
              author: "Carol",
              icon: "https://media.giphy.com/media/mI7pTDy9JadLa/giphy.gif",
              upvoteCount: 110
          },
          {
              title: "Team Player Award",
              message: "Recognizing outstanding teamwork and collaboration.",
              author: "David",
              icon: "https://media.giphy.com/media/DrtIQlcABGNC8/giphy.gif",
              upvoteCount: 105
          }
      ]
  },
  {
      title: "Learning and Development",
      category: "education",
      author: "Jack Wilson",
      icon: "https://media.giphy.com/media/NBb34DBnaqXMZsU6Lb/giphy.gif",
      description: "Opportunities for learning and professional growth.",
      cards: [
          {
              title: "Online Courses",
              message: "Enroll in our online courses to enhance your skills.",
              author: "Eve",
              icon: "https://media.giphy.com/media/6j1OkiHXofa5W/giphy.gif",
              upvoteCount: 120
          },
          {
              title: "Skill Development Workshop",
              message: "Participate in workshops to develop new skills.",
              author: "Frank",
              icon: "https://media.giphy.com/media/S5cYXm84oJG6zpAMxx/giphy.gif",
              upvoteCount: 115
          }
      ]
  }
];

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


}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
