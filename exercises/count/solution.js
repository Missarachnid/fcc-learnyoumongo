//requrire mongo db
var mongo = require("mongodb").MongoClient;
//target age sent as first argument
var age = process.argv[2];
//database location
var url = "mongodb://localhost:27017/learnyoumongo";


mongo.connect(url, function(err, db){
    if(err){
        throw err;
    }
    var collection = db.collection("parrots");
    //Where age is greater than argument supplied
    collection.count({age: {$gt: +age}},
        function(err, data){
            if(err){
                throw err;
            }
        console.log(data);
        db.close();
    });
    
});
