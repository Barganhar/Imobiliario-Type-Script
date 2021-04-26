//Página do BD
import mongoose from "mongoose"
mongoose
.connect("mongodb+srv://dormamu:321@cluster0.9e9nc.mongodb.net/Projeto?retryWrites=true&w=majority", 
 {useNewUrlParser: true, useUnifiedTopology: true}
 )
.then(() => {
    console.log("Aplicação conectada com o banco de dados");
})
.catch((erro) =>{
    console.log(`Erro ao conectar com o banco de dados: ${ erro }`)
});

export {mongoose};