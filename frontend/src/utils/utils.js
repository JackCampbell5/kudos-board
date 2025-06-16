export async function fetchBoards(after){
    const kudosBoards = [
        {
          title: "Team Success",
          category: "celebration",
          author: "Alice Johnson",
          icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
          description: "Celebrating the team's outstanding success and achievements in the recent project."

        },
        {
          title: "Great Job on the Project",
          category: "thanks",
          author: "Bob Smith",
          icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
          description: "A big thank you to everyone for their hard work and dedication on the project."

        },
        {
          title: "Daily Inspiration",
          category: "inspo",
          author: "Carol Lee",
          icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
          description: "Kickstart your day with a dose of daily inspiration and motivation."
        },
        {
          title: "Recent Achievements",
          category: "recent",
          author: "David Brown",
          icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
          description: "Highlighting the most recent achievements and milestones reached by our team."
        },
        {
          title: "Birthday Bash",
          category: "celebration",
          author: "Eve Davis",
          icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
          description: "Expressing gratitude for the relentless hard work and commitment shown by the team."
        },
        {
          title: "Thank You for Your Hard Work",
          category: "thanks",
          author: "Frank Wilson",
          icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
          description: "Join us in celebrating the birthdays of our amazing team members this month."
        },
        {
            title: "Motivational Monday",
            category: "inspo",
            author: "Grace Kim",
            icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
            description: "Start your week with motivational quotes and stories to keep you inspired."
        },
        {
          title: "Weekly Highlights",
          category: "recent",
          author: "Henry White",
          icon: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNvb2RoeXI5amJlcTNzNXVrMmFqMmx0aWFncW1ycHRoMWlwdDNxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt6ML6BklcajjsA/giphy.gif",
          description: "A recap of the week's highlights and key moments worth celebrating."
        }
      ];
      after(kudosBoards);
}


export function catTranslate(category){
    switch (category) {
        case "all":
            return "Home"
        case "recent":
            return "Recent"
        case "celebration":
            return "Celebration"
        case "thanks":
            return "Thank You"
        case "inspo":
            return "Inspiration"
    }

}
