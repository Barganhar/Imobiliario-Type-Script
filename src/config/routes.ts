import { Router } from "express";
import { VendaController } from "../controllers/VendaController";
import { AlugarController } from "../controllers/AlugarController";


const router = Router();
const vendaController = new VendaController();
const alugarController = new AlugarController();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor

// rotas para registrar
router.post("/registro/venda", vendaController.venda);
router.post("/registro/aluguel", alugarController.alugar);

// rotas para listagem
router.get("/listar/venda", vendaController.listarVenda);
router.get("/listar/aluguel", alugarController.listarAlugar);

// rotas para listagem
router.get("/listar/venda/:id", vendaController.listarVendaId);
router.get("/listar/aluguel/:id", alugarController.listarAlugarId);

// rotas para deletar
router.delete("/deletar/venda/:id", vendaController.deletarVenda);
router.delete("/deletar/aluguel/:id", alugarController.deletarAlugar);

//editar
router.put("/alugar/editar/:id", alugarController.editar);
router.put("/vender/editar/:id", vendaController.editar);


export { router };
