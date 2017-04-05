//require mongo
var mongo = require('mongodb').MongoClient
//the 1st argment is the database name
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function(err, db){
    if(err){
        throw err;
    }
    
    var collection = db.collection('users');
    //change the user tinatime's age from 30 to 40
    collection.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  }, function(err) {
    if (err) throw err;
    db.close();
  });
});
