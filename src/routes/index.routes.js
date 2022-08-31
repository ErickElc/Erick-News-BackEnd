const express = require("express");
const cors = require("cors");
const router = require("./post.routes.js");
const routerComments = require("./comment.routes.js");





const routes = app =>{
    app.use(
        "/api",
        express.urlencoded({ extended: false }),
        express.json(),
        cors(),
        router,
        routerComments
    )
    app.use('/', (req, res)=>{
        res.send('Bem Vindo')
    })
}

module.exports = routes;