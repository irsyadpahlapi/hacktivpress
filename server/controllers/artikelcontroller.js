const Artikel = require('../models/Artikel')
const jwt = require ('jsonwebtoken')
module.exports = {
  showall (req, res) {

  },
  addartikel (req, res) {
    // let decoded = jwt.verify(req.headers.token, process.env.SECRET);
    artikel = new Artikel();
    // artikel.title = req.body.title
    // artikel.content = req.body.content
    // artikel.categori = req.body.categori
    artikel.thumbnail = req.file.cloudStoragePublicUrl
    // artikel.author = decoded.id
    artikel.save().then( data => {
      res.status(200).json({
        message: 'add artikel succes',
        data
      })
    })
  }
};
