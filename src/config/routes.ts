import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";
import { VendedorController } from "../controllers/VendedorController";
import { VenderController } from "../controllers/VenderController";
import { AlugarController } from "../controllers/AlugarController";


const router = Router();
const clienteController = new ClienteController();
const vendedorController = new VendedorController();
const venderController = new VenderController();
const alugarController = new AlugarController();

//Métodos HTTP -> GET, POST e etc...
// GET -> Solitar recursos/dados do servidor
// POST -> Enviar recursos/dados/entidades para o servidor

// rotas para registrar
router.post("/registro/cliente", clienteController.cliente);
router.post("/registro/venda", venderController.vender);
router.post("/registro/aluguel", alugarController.alugar);

// rotas para listagem
router.get("/listar/cliente", clienteController.listarCliente);
router.get("/listar/venda", venderController.listarVender);
router.get("/listar/aluguel", alugarController.listarAlugar);

// rotas para deletar
router.delete("/deletar/cliente/{id}", clienteController.deletarCliente);
router.delete("/deletar/venda/{id}", venderController.deletarVender);
router.delete("/deletar/aluguel/{id}", alugarController.deletarAlugar);

// vender

router.put("/vender/venda/{id}", vendedorController.alterarVender);
router.put("/alugar/aluguel/{id}", vendedorController.alterarAlugar);


export { router };
