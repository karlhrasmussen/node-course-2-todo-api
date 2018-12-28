// khr test
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connct to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Karl Rasmussen'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    db.collection('Users').deleteOne({
             _id: new ObjectID('5c2670c2044739682cf93751')
         }).then((result) => {
        console.log(result);
    });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //client.close();
});