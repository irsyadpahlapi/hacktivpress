const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Userschema = new Schema({
  title: String,
  content: String,
  category: String,
  thumbnail: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},{timestamps:true})

const User = mongoose.model('User',Userschema)

module.exports = User;
