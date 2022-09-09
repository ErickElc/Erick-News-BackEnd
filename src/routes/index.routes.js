const express = require("express");
const cors = require("cors");
const routerPost = require("./post.routes.js");
const routerComments = require("./comment.routes.js");
const routerAuth = require("./auth.routes.js");
const routerUser = require("./user.routes.js");


const routes = app =>{
    app.use(
        "/api",
        express.urlencoded({ extended: false }),
        express.json(),
        routerUser,
        routerPost,
        routerComments
        ),
    app.use(
        '/auth',
        express.urlencoded({ extended: false }),
        express.json(),
        routerAuth
    )
    app.use('/', (req, res)=>{
        res.status(200).send('Bem Vindo')
    })
}

module.exports = routes;