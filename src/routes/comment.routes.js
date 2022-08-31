const express = require("express");
const commentsController = require('../controllers/commentsController.js')


const routerComments = express.Router();


routerComments
    .get('/comments/all', commentsController.listComments)
    .post('/comment/new/:id', commentsController.createComment)

module.exports = routerComments;