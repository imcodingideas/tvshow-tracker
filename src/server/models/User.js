const mongoose = require('mongoose')

const { Schema } = mongoose
mongoose.Promise = global.Promise

const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
})

// userSchema.pre('save', function(next) {
//   const user = this
//   if (!user.isModified('password')) return next()
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) return next(err)
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) return next(err)
//       user.password = hash
//       next()
//     })
//   })
// })

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     if (err) return cb(err)
//     cb(null, isMatch)
//   })
// }

module.exports = mongoose.model('User', userSchema)
