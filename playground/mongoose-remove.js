const {ObjectID} = require('mongodb')
const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/Todo')
const {User} = require('../server/models/User')


Todo.findByIdAndDelete('5bea00b4e52b61e59c8f1574').then((result) => {
    console.log(result)
})