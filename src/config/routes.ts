import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";
import { CasaController } from "../controllers/CasaController";
import { VenderController } from "../controllers/VenderController";
import { AlugarController } from "../controllers/AlugarController";


const router = Router();
const clienteController = new ClienteController();
const casaController = new CasaController();
const venderController = new VenderController();
const alugarController = new AlugarController();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor

// rotas para registrar
router.get("/registro/cliente", clienteController.cliente);
router.get("/registro/casa", casaController.casa);
router.get("/registro/venda", venderController.vender);
router.get("/registro/aluguel", alugarController.alugar);

// rotas para listagem
router.get("/listar/cliente", clienteController.listarCliente);
router.get("/listar/casa", casaController.listarCasa);
router.get("/listar/venda", venderController.listarVender);
router.get("/listar/aluguel", alugarController.listarAlugar);

// rotas para deletar
router.get("/deletar/cliente", clienteController.deletarCliente);
router.get("/deletar/casa", casaController.deletarCasa);
router.get("/deletar/venda", venderController.deletarVender);
router.get("/deletar/aluguel", alugarController.deletarAlugar);


export { router };
