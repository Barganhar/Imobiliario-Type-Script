import { Router } from "express";
import { RegistroController } from "../controllers/RegistroController";
import { ListarController } from "../controllers/ListarController";

const router = Router();
const RegistroController = new RegistroController();
const ListarController = new ListarController();

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
