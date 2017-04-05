//require mongo
var mongo = require('mongodb').MongoClient;
//age for match is sent in 1st arg
var age = parseInt(process.argv[2]);
//db locaiton
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var parrots = db.collection('parrots');
    //find all docs where age > age(argument)
    var search = parrots.find({
            age: {
                $gt: +age
            }
        });
        search.toArray(function(err, doc){
            if(err){
                throw err;
            }
            console.log(doc);
            db.close();
        });
    
});
