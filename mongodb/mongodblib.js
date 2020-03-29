const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://usuario1:usuario1@petsociety-jo7y6.mongodb.net/test?retryWrites=true&w=majority';

const dbName = 'PetSociety';

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        callback(db, client);
    });
}


exports.getDatabase = getDatabase;


