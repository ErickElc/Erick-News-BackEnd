const commentModel = require('../model/Comments.js');
const jwt = require('jsonwebtoken');

class commentsController{
    static async listComments(req,res){
        try {
            const comments = await commentModel.find().populate({path: 'userId', select: 'name _id email'})
                res.status(200).send(comments);
        } catch (error) {
            res.status(500).send("Não foi possível pegar esses comentários " + error);
        } 
    }
    static async createComment(req, res){
        const token = req.body.token;
        const comment = new commentModel({
            content: req.body.content,
            postId: req.body.postId,
            userId: req.body.userId,
        });
        try{
            const authorization = jwt.verify(token, process.env.SECRET_TOKEN);
            if(req.body.userId != authorization._id) return res.status(403).send('não foi possível criar esse comentário');
            else{
                await comment.save();
                res.status(201).send("Comentário feito com sucesso");
            }
        }
        catch(err){
            res.status(500).send(`Não foi possível fazer o comentário:  ${err}`);
        }
    }
    static async deleteComment(req,res){
        const id = req.params.id;
        try {
            const findUser = await commentModel.findOne({_id: id});
            const authorization = jwt.verify(req.body.token, process.env.SECRET_TOKEN);
            if(findUser.userId._id != authorization._id) return res.status(403).send('Não foi possível deletar esse comentário')
            await commentModel.findByIdAndDelete(id);
            res.status(200).send("comentário excluido com sucesso!");

        } catch (error) {
            res.status(500).send(`Não foi possível excluir esse comentário${error}`);
        }
    }
}
module.exports = commentsController;