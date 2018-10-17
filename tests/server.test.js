const expect = require('expect');
const request = require('supertest')

const {app} = require('../server/server')
const {Todo} = require('../server/models/Todo')

describe('POST /todos', () => {
    it('should create a new Todo', (done) =>{
        let text = 'Test todo text';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text)

        })
        .end((err, res) =>{
            
        })
    })
})