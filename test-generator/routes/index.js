var express = require('express');
var router = express.Router();

const formidable = require('formidable')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', function(req, res, next) {
  res.render('portrait');
});

router.post('/portrait', function (req, res, next) {
  // 创建 form 对象
  const form = formidable({
    uploadDir: __dirname + '/../public/images',
    keepExtensions: true
  });
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields)
    // console.log(files)
    // res.json({ fields, files });

    const url = '/images/' + files.portrait.newFilename
    res.end(url)
  });
});

module.exports = router;
