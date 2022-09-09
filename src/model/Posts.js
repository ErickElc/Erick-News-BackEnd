const mongoose = require("mongoose");



const postSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
        token: {type: String},
        tags: {type: String},
        date: {type: Date, default: Date.now()}
    },

    {
        versionKey: false
    }
)

const postModel = mongoose.model("post", postSchema)


module.exports = postModel;