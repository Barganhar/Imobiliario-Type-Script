import express, {Request, Response} from "express";
const app = express();
app.use(express.json());

console.clear();

app.listen(3000, () =>{
    console.log("\n\n--O SERVIDOR ESTÁ RODANDO!--\n\n");
});