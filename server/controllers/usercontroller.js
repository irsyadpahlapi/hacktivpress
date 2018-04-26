const User = require('../models/User')

module.exports = {
  signup (req,res) {
    let user = new User();
    user.username = req.body.username
    user.password = req.body.password
    user.save().then(data=>{
      res.status(200).json({
        message: 'signup data succes',
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
    User.findOne({username:req.body.username}).then(data => {
      let check = bcrypt.compareSync(req.body.password, data.password);
      if (check) {
        let token = jwt.sign({id: data._id,username: data.username},process.env.SECRET)
        res.status(200).json({
          message: "anda berhasil login",
          token,
          id:data._id,
          status:200
        })
      }
      else {
        res.status(400).json({
          message: "password tidak ditemukan"
        })
      }
    }).catch(err => {
      res.status(400).json({
        messag: "username tidak ditemukan"
      })
    })
  }
};
