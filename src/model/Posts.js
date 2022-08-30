const mongoose = require("mongoose");



const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    tags: {type: String}
})

const postModel = mongoose.model("Post", postSchema)


module.exports = postModel;