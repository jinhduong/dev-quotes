const express = require('express');
const cors = require('cors');
const quotes = require('./quotes.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const rdQuote = () => {
    const num = Math.floor(Math.random() * Math.floor(quotes.length - 1));
    return quotes[num];
}

app.get('/q', (req, res) => {
    res.json(rdQuote());
});

app.get('/', (req, res) => {
    res.json(rdQuote());
});

app.listen(port, () => console.log(`Server running on ${port}`));


