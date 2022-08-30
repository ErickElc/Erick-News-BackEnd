const express = require("express");
const routes = require("./src/routes/index.routes");
const db = require("./src/config/db.js")

const PORT = process.env.PORT || 8877;
const app = express();

routes(app)


app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

db.on("error",console.error.bind("Houver um erro ao conectar o banco de dados"));


db.once("open", ()=>{
    console.log("Conexão com banco de dados feita com sucesso");
})


