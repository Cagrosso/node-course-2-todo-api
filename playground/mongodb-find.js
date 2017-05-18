// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to the Database');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find().count().then((count) => {
    //         console.log(`Todos: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: "Cameron"
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });


    db.close();
});