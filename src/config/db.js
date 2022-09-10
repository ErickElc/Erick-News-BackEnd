const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:admin@ericknews.6giofg4.mongodb.net/user?retryWrites=true&w=majority',{
	useUnifiedTopology: true,
	useNewUrlParser: true,
})

const db = mongoose.connection;

module.exports = db;