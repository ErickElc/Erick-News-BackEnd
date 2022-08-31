const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
    {
        content: {type: String, required: true},
        postId:{type: String, required: true},
        date: {type: Date, default: Date.now}
    }
,   {
        versionKey: false
    })

const commentModel = mongoose.model("comment", commentSchema)


module.exports = commentModel;