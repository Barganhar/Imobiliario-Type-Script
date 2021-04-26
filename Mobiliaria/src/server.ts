import express, {Request, Response} from "express"; 

//importando biblioteca do BD
import {mongoose} from "./config/database";

console.clear();

const app = express();

//conexão com o BD
const database = mongoose;


app.listen(3000, () =>{
    console.log("\n\n--O SERVIDOR ESTÁ RODANDO!--\n\n");
});
 