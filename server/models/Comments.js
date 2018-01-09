const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
  text: {type: String, required: true},
  date: { type: Date, default: Date.now },
  post: {type: Schema.Types.ObjectId, ref: 'Post'}
})

module.exports = mongoose.model('Comment', Comment)
