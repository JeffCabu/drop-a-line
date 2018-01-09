const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  message: {type: String, required: true},
  img: String,
  userName: {type: String, required: true},
  date: { type: Date, default: Date.now },
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

module.exports = mongoose.model('Post', PostSchema)
