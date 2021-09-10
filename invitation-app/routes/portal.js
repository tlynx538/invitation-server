var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add',(req,res)=>{
  res.render('invite');
})

router.get('/view',(req,res)=>{
  res.render('view');
})

module.exports = router;
