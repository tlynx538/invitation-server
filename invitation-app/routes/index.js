var express = require('express');
var router = express.Router();
var guestModel = require('../db')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/validate/:id',async(req,res)=>{
  guestModel.findOneAndUpdate(
    {invitation_string:req.params.id},
    {$set:
      {validate_guest: true}
    },
    {upsert:true},
    (err,docs)=>
    {
      if(err) 
        console.log(err);
      else 
      {
        console.log("Guest Validated");
        res.render('thanks',{id: docs.guest_name});
      }
    }
    )
})

module.exports = router;
