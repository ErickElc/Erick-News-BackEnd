const request = require('supertest');
const app = require('../../app.js');

describe('Teste na rotas do usuário', () =>{

    it('Pegando Usuários', async () => {
       const res =  await request(app).get('/api/users/all')

       expect(res.statusCode).toEqual(200)

    }, 10000) 

    it('Criando Usuário', async ()=>{ 
        const res = await request(app)
            .post('/api/users/register').send({
                name: 'Erick Lucas',
                age: '21',
                email: 'elcn1234@gmail.com',
                password: '123456789'
            });
        const res2 = await request(app)
            .post('/api/users/register').send({
                name: 'Erick Lucas',
                age: '21',
                email: 'elcn1234@gmail.com',
                password: '123456789'
            });
        expect(res.status).toEqual(201);
        expect(res2.status).toEqual(400);
    }, 10000)   

    it('login de usuário', async() =>{
        const res = await request(app)
        .post('/api/users/login')
        .send({
            email: 'elcn1234@gmail.com',
            password: '123456789'
        })
        expect(res.status).toEqual(202)
    }, 10000)
    
    it('Dados do usuário', async () =>{
        const requestLogin = await request(app)
            .post('/api/users/login')
            .send({
                email: 'elcn1234@gmail.com',
                password: '123456789'
            })
        const res = await request(app)
            .post('/api/users/data')
            .send({
                email: 'elcn1234@gmail.com',
                token: requestLogin.text
            })
        expect(res.status).toEqual(200);
    }, 10000)

    it('Deletar Usuário', async ()=>{
        const res = await request(app)
            .delete('/api/users/delete')
            .send({email: 'elcn1234@gmail.com'})
        expect(res.status).toEqual(201)
    }, 10000)
})