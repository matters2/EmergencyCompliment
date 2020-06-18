const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')
const _ = require('underscore')

app.set('view engine', 'ejs')

let jokes = ['Strangers all wanna sit next to you on the bus.', 'You could open that jar of mayonnaise using only 3 fingers.', 'People behind you at movies think you are the perfect height.', 'Cops admire your ability to stay a perfect 3-5 miles above the speed limit', 'You never forget to fill the ice-cube tray', 'socks + snadals + you = Im into it', '80% of motorcycle gangs think you would be a delighful sidecar']

let colors = ['#008B8B', '#6495ED', '#E6E6FA', '#FFB6C1', '#00FA9A', '#32CD32', '#FFA07A', '#00FF7F']

function randomJoke(jokes) {
    let randomJoke = jokes[Math.floor(Math.random()*jokes.length)]
    return randomJoke
}

function randomColor(colors) {
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    return randomColor
}

app.get('/', (req, res) => {

    let joke = randomJoke(jokes)
    let color = randomColor(colors)

    res.render('index', { joke: joke, color: color})
})

app.get('/:name', function(req, res) {

    let theName = req.params
    let joke = randomJoke(jokes)
    let color = randomColor(colors)

    res.render('name', { joke: joke, color: color, theName: theName})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))