import express from "express"; 
import { router } from "./config/routes";
//importando biblioteca do BD
import {mongoose} from "./config/database";

console.clear();

const app = express();
const database = mongoose;

//Middlewares
app.use(express.json());
app.use(router);

app.listen(3000, () =>{
    console.log("\n\n--O SERVIDOR ESTÁ RODANDO!--\n\n");
});