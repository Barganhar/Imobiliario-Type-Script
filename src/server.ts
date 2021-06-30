import express, { Request, Response }  from "express"; 
import { router } from "./config/routes";
import cors from "cors";
import {mongoose} from "./config/database";

console.clear();

const app = express();
const database = mongoose;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () =>{
    console.log("\n\n--O SERVIDOR ESTÁ RODANDO!--\n\n");
});