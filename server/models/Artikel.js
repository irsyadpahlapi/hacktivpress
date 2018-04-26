const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Artikelschema = new Schema({
  title: String,
  content: String,
  category: String,
  thumbnail: String,
  categori: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},{timestamps:true})

const Artikel = mongoose.model('Artikel',Artikelschema)

module.exports = Artikel;
