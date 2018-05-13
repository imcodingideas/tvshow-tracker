const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const Show = require('./models/Show')

const app = express()

app.use(express.static('dist'))

// Connect to the Database
mongoose.connect('mongodb://localhost/tvshow')

mongoose.Promise = global.Promise
mongoose.connection.on('error', err => {
  console.error(`🙅 🚫 → ${err.message}`)
})

app.get('/api/init', (req, res) => {
  const alphabet = [
    '0-9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Children',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Food',
    'Home and Garden',
    'Horror',
    'Mini-Series',
    'Mystery',
    'News',
    'Reality',
    'Romance',
    'Sci-Fi',
    'Sport',
    'Suspense',
    'Talk Show',
    'Thriller',
    'Travel',
  ]

  const headingTitle = 'Top 12 Shows'

  res.send({ headingTitle, genres, alphabet })
})

app.get('/api/shows', (req, res) => {
  const { genre, alphabet } = req.query
  res.send('Hello')
})

app.post('/api/shows', (req, res) => {
  const postHeader = {
    userKey: 'MF0L3WXHW7UYZX30',
    username: 'josephvqm',
  }
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.send(500, { message: err.message })
})

app.listen(8080, () => {
  console.log(`Express running → PORT 8080`)
})
