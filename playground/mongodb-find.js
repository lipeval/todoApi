const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')


    // db.collection('Todos').find({
    //     _id: new ObjectID('5bc0be1eff55541c618dfe8d')
    // }).toArray().then((docs) =>{
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch doc')
    // })

    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to fetch doc')
    // })

    db.collection('Users').find({
        name: 'Felipe'
    }).toArray().then((docs) =>{
        console.log('Users')
        console.log(JSON.stringify(docs, undefined, 2))
    })


    // client.close(); 

});