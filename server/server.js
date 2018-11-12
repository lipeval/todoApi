/*local var called mongoose equal to the mongoose property on the object
its gonna be the return result from req the file just created
ES6 destructuring
*/
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/Todo');
const {User} = require('./models/User');
const {ObjectID} = require('mongodb')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos/:id', (req, res) => {
    let id = req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send()
            
        }
        res.send({todo})
    }).catch((e) =>{
        res.status(400).send()
    })
}, (e)=> {
    res.status(404).send()
});

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send()
        }
        res.send(todo)
    }).catch((e) => {
        res.status(400).send()
    });
});

app.listen(port, ()=>{
    console.log(`Running on ${port}`)
});

module.exports = {app};
