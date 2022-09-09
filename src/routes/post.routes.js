const express = require("express");
const PostController = require("../controllers/postsController");



const routerPost = express.Router();


routerPost
    .get('/posts/all', PostController.listarPosts)
    .get('/posts/:id', PostController.listarUmPost)
    .get('/posts/autor/:id', PostController.autorData)
    .post('/posts/new', PostController.cadastrarPost)
    .post('/posts/remove/:id', PostController.deletePost)
    .put('/posts/edit/:id', PostController.editarPost)


module.exports = routerPost;