const commentModel = require('../model/Comments.js');

class commentsController{

    static async listComments(req,res){
        try {
            const comments = await commentModel.find();
            res.status(200).send(comments);
        } catch (error) {
            res.status(500).send("Não foi possível pegar esses comentários " + error)
        } 
    }
    static async createComment(req, res){
        let comment = new commentModel(req.body);
        try{
            await comment.save()
            res.status(201).send("Comentário feito com sucesso");
        }
        catch(err){
            res.status(500).send(`Não foi possível fazer o comentário:  ${err}`);
        }
    }


}
module.exports = commentsController;