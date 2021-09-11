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
    mongoose.connect('mongodb+srv://mongo-user:abcd1234@cluster0.0kgj1.mongodb.net/Cluster0?retryWrites=true&w=majority');
    console.log("Connection to MongoDB Successful");
    var db = mongoose.connection;
    module.exports = guestModel;
}
catch(error)
{
    console.log(error);
}