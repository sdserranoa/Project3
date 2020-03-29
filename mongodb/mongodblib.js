const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://usuario1:usuario1@petsociety-jo7y6.mongodb.net/test?retryWrites=true&w=majority';

const dbName = 'Proyecto3';

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        callback(db, client);
    });
}
const getAllUsers = function (db, callback) {
    const collection = db.collection('users');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

const getUserById = function (idU, db, callback) {

    const collection = db.collection('users');
    collection.findOne({ id: parseInt(idU) },function(err,user){
        assert.equal(err, null);
        callback(user);
    });
}
const createUser = function (user, db, callback) {
    const collection = db.collection('users');
    collection.insertOne(user).then(callback(user));
}
const deleteUser = function (idU, db, callback) {
    const collection = db.collection('users');
    collection.deleteOne({ id: parseInt(idU) }).then(callback("User deleted"));
}
const updateUser = function (idU,user, db, callback) {
    const collection = db.collection('users');
 
    console.log(user);
    collection.updateOne({ "id": parseInt(idU) },
    {
        $set: { "name": user.name,
                "username":user.username,
                "password":user.password,
                "email":user.email,
                "age": user.age,
                "reviews":user.reviews
    },
        $currentDate: { lastModified: true }
    }).then(callback(user));
}
exports.getDatabase = getDatabase;
exports.getAllUsers=getAllUsers;
exports.getUserById=getUserById;
exports.createUser=createUser;
exports.deleteUser=deleteUser;
exports.updateUser=updateUser;



