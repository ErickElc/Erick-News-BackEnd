const mongoose = require("mongoose");
const uri = 'mongodb+srv://admin:admin@ericknews.6giofg4.mongodb.net/user?retryWrites=true&w=majority'

mongoose.connect(uri,{
	useUnifiedTopology: true,
	useNewUrlParser: true,
})

const db = mongoose.connection;

module.exports = db;