// require dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Songs = require('./models/tabs');
require('dotenv').config();

// connect to mongo
const mongoURI = 'mongodb+srv://ykhieml:oSjTfgkCvJSTULC1@cluster0.xp68xnd.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, () => {
    console.log('Connected to mongod')
});

// I
app.get('/', (req, res) => {
    Songs.find({}, (err, allSongs) => {
        res.render('index.ejs', {
            songs: allSongs
        })
    })
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

// Database seeding
// const sampleSongs = [
//     {
//       artist: 'Spinal Tap',
//       title: 'Big Bottom',
//       author: 'Sam',
//       img: 'https://images.genius.com/9b6f3ca4dc0ff6c3b35fb22bdeed41a3.442x500x1.jpg',
//       notation: 1234,
//       comment: 'A cool one'
//     },
//     {
//       artist: 'Ween',
//       title: 'Back to Basom',
//       author: 'Sam',
//       img: 'https://i.discogs.com/U-nFSOQAw0c89WCDLHRMz4Ri-9iN1hU9qgK3GkUXfKE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3MDIy/OC0xNDA4NzEzMzQ2/LTg0ODEuanBlZw.jpeg',
//       notation: 5678,
//       comment: 'Acoustic guitar favorite'
//     }
//   ];

// Using the Songs schema to add this information to the database
// Songs.insertMany(sampleSongs, (err, inserted) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Sample songs seeded successfully')
//     }
// });

// creating port
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});