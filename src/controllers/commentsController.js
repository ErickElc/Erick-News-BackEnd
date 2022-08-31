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
        const comment = new commentModel(req.body);
        try{
            await comment.save()
            res.status(201).send("Comentário feito com sucesso");
        }
        catch(err){
            res.status(500).send(`Não foi possível fazer o comentário:  ${err}`);
        }
    }
    static async deleteComment(req,res){
        const id = req.params.id;
        try {
            await commentModel.findByIdAndDelete(id);
            res.status(200).send("comentário excluido com sucesso!");

        } catch (error) {
            res.status(500).send(`Não foi possível excluir esse comentário${error}`)
        }
    }

}
module.exports = commentsController;