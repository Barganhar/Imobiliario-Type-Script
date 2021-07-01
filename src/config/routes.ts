import { Router } from "express";
import { VendaController } from "../controllers/VendaController";
import { AlugarController } from "../controllers/AlugarController";
import { CasaController } from "../controllers/CasaController";
import { ClienteController } from "../controllers/ClienteController";


const router = Router();
const vendaController = new VendaController();
const alugarController = new AlugarController();
const casaController = new CasaController();
const clienteController = new ClienteController();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor

// rotas para registrar
router.post("/registro/venda", vendaController.venda);
router.post("/registro/aluguel", alugarController.alugar);
router.post("/registro/casa", casaController.casa);
router.post("/registro/cliente", clienteController.cliente);

// rotas para listagem
router.get("/listar/venda", vendaController.listarVenda);
router.get("/listar/aluguel", alugarController.listarAlugar);
router.get("/listar/casa", casaController.listarCasa);
router.get("/listar/cliente", clienteController.listarCliente);

// rotas para listagem
router.get("/listar/venda/:id", vendaController.listarVendaId);
router.get("/listar/aluguel/:id", alugarController.listarAlugarId);
router.get("/listar/casa/:id", casaController.listarCasaId);
router.get("/listar/cliente/:id", clienteController.listarClienteId);

// rotas para deletar
router.delete("/deletar/venda/:id", vendaController.deletarVenda);
router.delete("/deletar/aluguel/:id", alugarController.deletarAlugar);
router.delete("/deletar/casa/:id", casaController.deletarCasa);
router.delete("/deletar/cliente/:id", clienteController.deletarCliente);

//editar
router.put("/alugar/editar/:id", alugarController.editar);
router.put("/vender/editar/:id", vendaController.editar);
router.put("/casa/editar/:id", casaController.editar);
router.put("/cliente/editar/:id", clienteController.editar);


export { router };
