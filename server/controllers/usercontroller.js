const User = require('../models/User')
const jwt = require('jsonwebtoken')
module.exports = {
  signup (req,res) {
    let user = new User();
    user.username = req.body.username
    user.password = req.body.password
    user.save().then(data=>{
      let token = jwt.sign({id: data._id,username: data.username},process.env.SECRET)
      res.status(200).json({
        message: 'signup data succes',
        token,
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message: 'data tidak bisa ditambahkan'
      })
    })
  },
  signin (req,res) {
    User.findOne({username:req.body.username,password:req.body.password}).then(data => {
      let token = jwt.sign({id: data._id,username: data.username},process.env.SECRET)
      res.status(200).json({
        message: "anda berhasil login",
        token,
        id:data._id,
        status:200
      })
    }).catch(err => {
      res.status(400).json({
        messag: "username tidak ditemukan"
      })
    })
  }
};
