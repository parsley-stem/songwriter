// require dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

// connect to mongo
const mongoURI = 'mongodb+srv://ykhieml:oSjTfgkCvJSTULC1@cluster0.xp68xnd.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, () => {
    console.log('Connected to mongod')
});

// I
app.get('/', (req, res) => {
    res.render('index.ejs')
});

// N
app.get('/new', (req, res) => {
    res.render('new.ejs')
});

// D
// U
// C
// E
app.get('/edit', (req, res) => {
    res.render('edit.ejs')
});

// S


// creating port
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});