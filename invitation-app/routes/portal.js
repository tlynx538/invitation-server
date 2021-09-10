var express = require('express');
var router = express.Router();
var md5 = require('js-md5')

var guestModel = require('../db')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add',async(req,res)=>{
  await guestModel.find()
  .then(function(doc)
  {
    console.log(doc);
  })
  res.render('invite');
})

router.post('/add',async(req,res)=>{
  var flag = true;
  await guestModel.find()
  .then(function(doc)
  {
    for(var i = 0;i<doc.length;i++)
    {
      if (req.body.guest == doc[i].guest_name)
      {
        console.log("Found");
        flag = false;
        break;
      }
    }
  })
  console.log("Flag State: "+flag);
  if(flag)
    {
      var save = {
        guest_name:req.body.guest,
        invitation_string: md5(req.body.guest),
        validate_guest: false
      }
      var data = new guestModel(save);
      data.save();
      res.render('invite',{guest_name:req.body.guest,invite_string:md5(req.body.guest),message:" Guest Added"});
    }
    else 
      res.render('invite',{message: "Guest Already Invited"});
})

router.get('/view',(req,res)=>{
  res.render('view');
})

module.exports = router;
