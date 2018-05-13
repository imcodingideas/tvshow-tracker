const mongoose = require('mongoose')

const { Schema } = mongoose
mongoose.Promise = global.Promise

const showSchema = new Schema({
  _id: Number,
  name: String,
  airsDayOfWeek: String,
  airsTime: String,
  firstAired: Date,
  genre: [String],
  network: String,
  overview: String,
  rating: Number,
  ratingCount: Number,
  status: String,
  poster: String,
  subscribers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  episodes: [
    {
      season: Number,
      episodeNumber: Number,
      episodeName: String,
      firstAired: Date,
      overview: String,
    },
  ],
})

module.exports = mongoose.model('Show', showSchema)
