const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server') 
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bc532a6b585551c9f9dbafe')

    // }, {
    //     $set: {
    //         completed: true
    //     }
        
    // }, {
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result)
    // }, (err) => {
    //     console.log(err)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bc0c78d9e7fb71ce05b39d3')
    }, {
        $set:{
            name: 'Lipe'
        },
        $inc: {
            age: -5
        }
    }, {
        returnOriginal: false
        
    }).then((res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })

   




// client.close(); 

});