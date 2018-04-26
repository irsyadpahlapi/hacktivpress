const Artikel = require('../models/Artikel')
const jwt = require ('jsonwebtoken')
module.exports = {
  showall (req, res) {
    Artikel.find().populate({ path: 'author'}).sort({createdAt:-1}).then(data => {
      res.status(200).json({
        message: 'show all artikel success',
        data
      })
    })
  },
  showdetail (req, res) {
    Artikel.findOne({_id:req.params.id}).populate({ path: 'author'}).sort({createdAt:-1}).then(data => {
      res.status(200).json({
        message: 'show all artikel success',
        data
      })
    })
  },
  addartikel (req, res) {
    let decoded = jwt.verify(req.headers.token, process.env.SECRET);
    artikel = new Artikel();
    artikel.title = req.body.title
    artikel.content = req.body.content
    artikel.categori = req.body.categori
    artikel.thumbnail = req.file.cloudStoragePublicUrl
    artikel.author = decoded.id
    artikel.save().then( data => {
      res.status(200).json({
        message: 'add artikel succes',
        data
      })
    })
  },
  updateartikel (req, res) {
    Artikel.updateOne({_id:req.params.id},{$set:{
      title:req.body.title,
      content:req.body.content,
      categori:req.body.categori
    }}).then( data => {
      res.status(200).json({
        message: 'update data success',
        data
      })
    })
  },
  deleteartikel (req, res) {
    Artikel.deleteOne({_id:req.params.id}).then( data => {
      res.status(200).json({
        message: 'delete data success',
        data
      })
    })
  }
};
