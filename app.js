// Bring in dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');
const school = require('./controllers/school');
const cors = require('cors');

// Connect to database
mongoose.connect('mongodb+srv://cpickard2790:carlisle518@schools-rzhnf.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, () =>[
    console.log('Connected to database')
]);
// If error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

// Initialize app
const app = express();

// Port number
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', school)
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/', (req, res) => {
    res.send("Invalid page");
})

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
