const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server') 
    const db = client.db('TodoApp')


    // delete Many 

    // db.collection('Todos').deleteMany({
    //     text: 'Pasear al perro'
    // }).then((docs)=>{
    //     console.log(docs)
    // }, (err)=> {
    //     console.log('Unable to delete doc', err)
    // })

    // //delete One
    
    // db.collection('Todos').deleteOne({
    //     text: 'Pasear al perro'
    // }).then((doc) => {
    //     console.log(doc)
    // }, (err) => {
    //     console.log('Unable to delete doc', err)
    // })

    //findOne and Delete


    db.collection('Users').deleteMany({name: 'Felipe'}).then((result) => {
        console.log(result)
    }, (err) => {
        console.log(err)
    })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bc0c0ade6bc011c994c67a5')
    }).then((result) => {
        console.log(result) 
    }, (err)=>{ 
        console.log(err)
    })

     // client.close(); 

});