var express = require('express');
var router = express.Router();
const {addartikel} = require('../controllers/artikelcontroller')
const {sendUploadToGCS} = require('../middlewares/uploadGCS')
const memUpload = require('../middlewares/upload')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',memUpload.single('picture'), sendUploadToGCS, addartikel);

module.exports = router;
