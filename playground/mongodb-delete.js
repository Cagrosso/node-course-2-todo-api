// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to the Database');
    }

    console.log('Connected to MongoDB server');

    // deteleteMany
    // db.collection('Todos').deleteMany({text: 'Get Lit'}).then( (result) => {
    //     console.log(result);
    // }, (err)=> {
    //     console.log(err);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });
    // findOneAndDelete
    // returns the value as well as deleting it
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    // db.collection('Users').deleteMany({name: 'Cameron'}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("591b89ff0db3e708f57e9551")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })



    db.close();
});