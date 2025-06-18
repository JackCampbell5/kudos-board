const cors = require('cors') // Cross Origin Resource Sharing
const express = require('express');
const app = express();
app.use(express.json())
app.use(cors()) // Enable CORS for all requests
const port = 4000;

const boardRoutes = require('./routes/boards')


app.get('/', (req, res) => {
    res.send('It works!');
});

app.use('/boards', boardRoutes)


app.get('/seedDatabase/', (req, res) => {
    const { exec } = require('child_process');
    exec('npx prisma db seed', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        res.status(500).send('Error seeding database');
    }else{
    console.log(stdout);
    res.send('Database seeded successfully');
    }});
});

app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
});
