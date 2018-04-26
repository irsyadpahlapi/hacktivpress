var express = require('express');
var router = express.Router();
const {addartikel, showall, updateartikel, deleteartikel, showdetail} = require('../controllers/artikelcontroller')
const {sendUploadToGCS} = require('../middlewares/uploadGCS')
const memUpload = require('../middlewares/upload')
/* GET home page. */

router.post('/',memUpload.single('picture'), sendUploadToGCS, addartikel);
router.get('/showdetail/:id', showdetail);
router.get('/', showall);
router.put('/:id', updateartikel);
router.delete('/:id', deleteartikel);

module.exports = router;
