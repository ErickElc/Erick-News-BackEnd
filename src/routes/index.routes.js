const express = require("express");
const cors = require("cors");
const router = require("./post.routes.js");





const routes = app =>{
    app.use(
        "/api",
        express.urlencoded({ extended: false }),
        express.json(),
        cors(),
        router
    )
}

module.exports = routes;