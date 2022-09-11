const express = require('express');
const userController = require('../controllers/userController');



const routerUser = express.Router();



routerUser
    .get('/users',(req, res)=>{
        res.send(200).send('Esse é a api de users')
    })
    .get('/users/all', userController.listUsers)
    .post('/users/register', userController.createUser)
    .post('/users/login', userController.loginUser)
    .post('/users/data', userController.userData)
    .post('/users/delete/:id', userController.deleteUsers)

module.exports = routerUser;