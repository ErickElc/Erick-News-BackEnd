const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:admin@ericknews.6giofg4.mongodb.net/posts?retryWrites=true&w=majority",{
	useUnifiedTopology: true,
	useNewUrlParser: true,
	// useCreateIndex: true,
})

const db = mongoose.connection;

module.exports = db