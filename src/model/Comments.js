const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    date: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
  }
);

const commentModel = mongoose.model("comment", commentSchema);

module.exports = commentModel;
