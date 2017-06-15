const mongoose = require('mongoose')
let Schema = mongoose.Schema

let articleSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

let Article = mongoose.model('Article', articleSchema)

module.exports = Article
