const postModel = require("../model/Posts.js");
const userModel = require("../model/User.js");
const jwt = require('jsonwebtoken')
class PostController{
    static async listarPosts(req, res) {
        try {
            const postsAll = await postModel.find().populate('autor').exec();
            res.status(200).send(postsAll);
        } 
        catch (error) {
            res.status(404).send(`${error} houve um erro`);
        }
    }
    static async listarUmPost(req, res) {
        const id = req.params.id;
        try {
            const post = await postModel.findById(id).populate({path: 'autor', select: 'name _id email admin'}).exec();;
            res.status(200).json(post)
        } 
        catch (error) {
            res.status(404).send("Esse post não existe " + error);
        }
    }
    static async cadastrarPost(req, res){
        const token = req.body.token;
        try{
            const findAutor = await userModel.findOne({email: req.body.email})
            let post = new postModel({
                title: req.body.title,
                description: req.body.description,
                autor: findAutor._id,
                tags: req.body.tags
            });
            const authorization = jwt.verify(token, process.env.SECRET_TOKEN);
           if(authorization._id != findAutor._id) return res.status(403).send('Não foi possível criar esse documento');
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
            const findPost = await postModel.findOne({_id: id});
            const authorization = jwt.verify(req.body.token, process.env.SECRET_TOKEN);
            if(authorization._id != findPost.autor._id) return res.status(403).send('Não foi possível editar esse documento');
            await postModel.findByIdAndUpdate(id, {$set: {
                title: req.body.title,
                description: req.body.description,
                tags: req.body.tags,
            }});
            res.status(200).send("Post editado com sucesso");
        }
        catch(err){
            res.status(500).send(`Houve um erro: ${err}`);
        }
    }    
    static async deletePost(req, res){
        const id = req.params.id;
        try {
            const findPost = await postModel.findOne({_id: id});
            const findAutor = await userModel.findOne({email: req.body.email})
            const authorization = jwt.verify(req.body.token, process.env.SECRET_TOKEN);
            if(authorization._id != findPost.autor._id) return res.status(403).send('Não foi possível deletar esse documento');
            await postModel.findByIdAndRemove(id)
            res.status(200).send("Post deletado com sucesso!");
        } 
        catch (error) {
            res.status(500).send(`Houve um erro: ${error}`);
        }
    }

    static async autorData(req, res){
        const idUser = req.params.id
        try {
            const findUser = await userModel.findOne({_id: idUser});
            const Data = {
                name: findUser.name,
                email: findUser.email,
                id: findUser._id
            }
            res.status(200).send(Data);
        } catch (error) {
            res.status(404).send(error);
        }
    }
}


module.exports = PostController;