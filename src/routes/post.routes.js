const express = require("express");
const PostController = require("../controllers/postsController");



const router = express.Router();


router
    .get('/all', PostController.listarPosts)
    .get('/:id', PostController.listarUmPost)
    .post('/new', PostController.cadastrarPost)
    .put('/edit/:id', PostController.editarPost)
    .delete('/remove/:id', PostController.deletePost)


module.exports = router;