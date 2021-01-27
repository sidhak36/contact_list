
var mongoose = require('mongoose');
var url = "mongodb://localhost/contact_list";

mongoose.connect(url, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('connected to MongoDb server successfully!');
});