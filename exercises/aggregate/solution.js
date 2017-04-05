
//#9 aggregate
//require mongodb
var mongo = require("mongodb").MongoClient;
//Where to find the database
var url = "mongodb://localhost:27017/learnyoumongo";
//size for the match sent in first argument
var sizeMatch = process.argv[2];

mongo.connect(url, function(err, db){
    if(err){
        throw err;
    }
//average price for all products that match the size in 1st arg
    
    var collection = db.collection("prices");
    collection.aggregate([
        { $match: { size: sizeMatch}}, 
        { $group: {
            _id: 'average',
            avg: { $avg: '$price' }
        }}
        ]).toArray(function(err, data){
            if(err){
                throw err;
            }
        //data is an array with 1 object containing 2 properties
        //I needed the 2nd one
        console.log(data[0]['avg'].toFixed(2));
        db.close();
    });
});
