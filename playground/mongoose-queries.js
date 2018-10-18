const {ObjectID} = require('mongodb')
const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/Todo')
const {User} = require('../server/models/User')

// const id = '5bc78534d0d5c003db119d5511';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid!')
// }

// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos)
// // }, (e) => {
// //     console.log('Unable', e)
// // })  


// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log('Todo', todo)
// // })

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo)
// }).catch((e) => console.log(e))

const id = '5bc8b5229274cd03a291080c'


User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found')
    }
    console.log('User by Id', user)
}).catch((e)=> console.log(e))