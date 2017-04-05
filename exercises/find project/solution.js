//require mongodb
var mongo = require('mongodb').MongoClient;
//age for match sent as 1st argument
var arg = parseInt(process.argv[2]);
//db location
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var parrots = db.collection('parrots');
    //find all dox where age > arg
    var search = parrots.find({
            age: { $gt: +arg }
    },
    {
        name: 1,
        age: 1,
        _id: 0
        });
        search.toArray(function(err, doc){
            if(err){
                throw err;
            }
            console.log(doc);
            db.close();
        });
    
});
