const express = require('express')
const os = require('os')

const app = express()

app.use(express.static('dist'))

app.get('/api/shows', (req, res) => {
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

app.listen(8080, () => console.log('Listening on port 8080!'))
