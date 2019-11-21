const MongoClient = require('mongodb').MongoClient;

function connect() {
     return MongoClient.connect("mongodb://heroku_mjrklbvl:6an38k795kgunjropt3673dhm@ds033579.mlab.com:33579/heroku_mjrklbvl",
         {useUnifiedTopology: true})
        .then(mongo => mongo.db('heroku_mjrklbvl'))
        .catch(()=> process.exit(1));
}

module.exports = connect;