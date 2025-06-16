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


app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
});
