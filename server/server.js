/*local var called mongoose equal to the mongoose property on the object
its gonna be the return result from req the file just created
ES6 destructuring
*/
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/Todo');
const {User} = require('./models/User');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=> {
    let todo = new Todo ({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e)=> {
        res.status(400).send(e)
    })
})

app.listen(3000, ()=>{
    console.log('Running on 3000')
});

module.exports = {app};
