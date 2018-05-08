const express = require('express');
const quotes = require('./quotes.json');

const app = express();
const port = process.env.PORT || 3000;

const rdQuote = () => {
    const num = Math.floor(Math.random() * Math.floor(this.quotes.length - 1));
    return quotes[num];
}

app.get('/q', (req, res) => {
    res.json(rdQuote());
});

app.listen(port, () => console.log(`Server running on ${port}`));


