import { Router } from "express";
import { VendaController } from "../controllers/VendaController";
import { AlugarController } from "../controllers/AlugarController";


const router = Router();
const clienteController = new VendaController();
const alugarController = new AlugarController();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor

// rotas para registrar
router.post("/registro/venda", clienteController.venda);
router.post("/registro/aluguel", alugarController.alugar);

// rotas para listagem
router.get("/listar/venda", clienteController.listarVenda);
router.get("/listar/aluguel", alugarController.listarAlugar);

// rotas para deletar
router.delete("/deletar/venda/:id", clienteController.deletarVenda);
router.delete("/deletar/aluguel/:id", alugarController.deletarAlugar);

export { router };
