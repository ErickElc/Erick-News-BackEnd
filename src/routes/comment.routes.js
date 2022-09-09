const express = require("express");
const commentsController = require('../controllers/commentsController.js')


const routerComments = express.Router();


routerComments
    .get('/comments/all', commentsController.listComments)
    .post('/comments/new/:id', commentsController.createComment)
    .delete('/comments/delete/:id', commentsController.deleteComment);

module.exports = routerComments;