//require mongo db
var mongo = require('mongodb').MongoClient;
//name of data base is in 1st. argument
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function(err, db){
    if(err){
        throw err;
    }
    //collection is in 2nd argument sent
    var collection = db.collection(process.argv[3]);
    //The id for the document to be removed is the the 3rd. argument
    collection.remove({_id: process.argv[4]}, function(err){
       if(err){
           throw err;
       }
       db.close();
   });
    
});
