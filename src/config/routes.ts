import { Router } from "express";
import { RegistroController } from "../controllers/RegistroController";
import { ListarController } from "../controllers/ListarController";
import { DeletarController } from "../controllers/DeletarController";

const router = Router();
const registroController = new RegistroController();
const listarController = new ListarController();
const deletarController = new DeletarController();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor

// rotas para registrar
router.get("/registro/pessoa", registroController.pessoa);
router.get("/registro/casa", registroController.casa);
router.get("/registro/venda", registroController.venda);
router.get("/registro/aluguel", registroController.aluguel);

// rotas para listagem
router.get("/listar/pessoa", listarController.pessoa);
router.get("/listar/casa", listarController.casa);
router.get("/listar/venda", listarController.venda);
router.get("/listar/aluguel", listarController.aluguel);

// rotas para deletar
router.get("/deletar/pessoa", deletarController.pessoa);
router.get("/deletar/casa", deletarController.casa);
router.get("/deletar/venda", deletarController.venda);
router.get("/deletar/aluguel", deletarController.aluguel);


export { router };
