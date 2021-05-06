import { Request, Response } from "express";
import AlugarSchema from "../models/AlugarSchema";
import VenderSchema from "../models/VenderSchema";
import ClienteSchema from "../models/ClienteSchema";


class VendedorController {

    async alterarVender(request: Request, response: Response) {
        try {
        const novoCliente = await ClienteSchema.create(request.body);
        response.status(201).json({
            data: novoCliente,
            error: false,
            msg: "Cliente cadastrado com sucesso!",
        });
        } catch (error) {
        response.status(400).json({
            data: error,
            error: true,
            msg: "Não foi possível cadastrar o cliente",
        });
        }
    }

    async alterarAlugar(request: Request, response: Response) {
        try {
        const novoCliente = await ClienteSchema.create(request.body);
        response.status(201).json({
            data: novoCliente,
            error: false,
            msg: "Cliente cadastrado com sucesso!",
        });
        } catch (error) {
        response.status(400).json({
            data: error,
            error: true,
            msg: "Não foi possível cadastrar o cliente",
        });
        }
    }

}
export {VendedorController};
