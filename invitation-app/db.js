const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var guestSchema = new Schema ({
    guest_name: String,
    invitation_string: String,
    validate_guest: Boolean 
  },{collection: 'guest-names'});
var guestModel = mongoose.model('guestNames',guestSchema);

try 
{
    mongoose.connect('mongodb://localhost:27017/invitation-db');
    console.log("Connection to MongoDB Successful");
    var db = mongoose.connection;
    module.exports = guestModel;
}
catch(error)
{
    console.log(error);
}