const postModel = require("../model/Posts.js");

class PostController{

    static listarPosts(req, res) {
        postModel.find((err, posts)=>{
            (!err) ? res.status(200).json(posts) : res.status(404).send(`${err.message} houve um erro`);
        })
    }
    static async cadastrarPost(req, res){
        let post = new postModel(req.body);
        try{
            await post.save()
            res.status(201).send("post cadastrado com sucesso");
        }
        catch(err){
            res.status(500).send(`Não foi possível fazer o post ${err}`);
        }
    }
    static async atualizarPost(req, res){
        const id = req.params.id;
        try{
            await postModel.findByIdAndUpdate(id)

        }
        catch(err){

        }
    }    

}


module.exports = PostController;