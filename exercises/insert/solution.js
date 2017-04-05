//require mongodb
var mongo = require('mongodb').MongoClient;
//location of db
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var collection = db.collection('docs');
    //1st and 2nd args are first and last names
    var newEntry = {firstName: process.argv[2], lastName: process.argv[3]};
    collection.insert(newEntry, function(err, data){
        if(err){
            throw err;
        }
        console.log(JSON.stringify(newEntry));
        db.close();
    });
    
});
