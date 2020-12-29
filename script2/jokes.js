require('dotenv').config();
const fs = require('fs').promises;
const path = require('path');
const oneLinerJoke = require('one-liner-joke');
const jokeAmount = parseInt(process.env.JOKE_AMOUNT);
const jokeSubject = process.env.JOKE_SUBJECT;
const fileName = "jokes";
let jokeCounter = 0;

async function writeJokes() {
    while (jokeCounter != jokeAmount) {
        let joke = oneLinerJoke.getRandomJokeWithTag(jokeSubject).body + '\n';
        let data = await fs.readFile(fileName);
        if (!data.includes(joke)) {
            await fs.appendFile(fileName, joke);
            jokeCounter++;
        }
    }
}

writeJokes();
