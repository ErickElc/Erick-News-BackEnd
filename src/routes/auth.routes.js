const express = require('express');
const authController = require('../controllers/authController');


const routerAuth = express.Router();



routerAuth
    .get('/admin', authController.authController, (req, res) => {
        if(req.user.admin == true){
            return res.status(202).send('Só admin pode rodar');
        }
        res.status(403).send('Not admin: Access Denied');
    })
    .post('/free', authController.authController, (req, res)=>{
        res.send('Acesso permitido');
    })

module.exports = routerAuth;