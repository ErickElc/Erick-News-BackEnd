const request = require('supertest');
const app = require('../../app.js');

describe('Teste na rota de Posts', () => {
    it('Exibir Todos os posts', async()=>{
        const res = await request(app)
            .get('/api/posts/all')
            .expect('Content-Type', /json/)
        expect(res.statusCode).toEqual(200)
    }, 20000)
    it('Exibir um unico post', async () => {
        const res = await request(app)
            .get('/api/posts/631a88128c822e5b53b39ec1')
        expect(res.statusCode).toEqual(200)
    })
    
})


