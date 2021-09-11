var express = require('express');
var router = express.Router();
var guestModel = require('../db')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/validate/:id',async(req,res)=>{
  // Can be optimized better
  var userExists = await guestModel.exists({invitation_string: req.params.id})
    if(!userExists) 
    {
      res.send("This User Does Not Exist");
    }
    else
    {
      guestModel.findOneAndUpdate
      (
          {invitation_string:req.params.id},
          {$set:
            {validate_guest: true}
          },
          {upsert:true},
          (err,docs)=>
          {
            if(err) 
            {
              console.log("Error: "+err);
              res.status(err || 500);
              res.render('error');
            }
            else 
            {
              console.log("Guest Validated");
              res.render('thanks',{id: docs.guest_name});
            }
          }
        )
    }
  

  }
)


module.exports = router;
