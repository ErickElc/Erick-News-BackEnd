const postModel = require("../model/Posts.js");

class PostController{

    static async listarPosts(req, res) {
        try {
            const postsAll =  await postModel.find();
            res.status(200).send(postsAll);
        } 
        catch (error) {
            res.status(404).send(`${err.message} houve um erro`);
        }
    }
    static async listarUmPost(req, res) {
        const id = req.params.id;
        try {
            const post = await postModel.findById(id);
            res.status(200).json(post)
        } 
        catch (error) {
            res.status(404).send("Esse post não existe " + error);
        }

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
    static async editarPost(req, res){
        const id = req.params.id;
        try{
            await postModel.findByIdAndUpdate(id, {$set: {
                title: req.body.title,
                description: req.body.description,
                tags: req.body.tags,
            }})
            res.status(200).send("Post editado com sucesso");
        }
        catch(err){
            res.status(500).send(`Houve um erro: ${err}`);
        }
    }    
    static async deletePost(req, res){
        const id = req.params.id;
        try {
            await postModel.findByIdAndRemove(id)
            res.status(200).send("Post deletado com sucesso!");
        } 
        catch (error) {
            res.status(500).send(`Houve um erro: ${error}`);
        }
    }
}


module.exports = PostController;