import { Request, Response } from "express";
import ClienteSchema from "../models/ClienteSchema";
import CasaSchema from "../models/CasaSchema";
import AlugarSchema from "../models/AlugarSchema";
import VenderSchema from "../models/VenderSchema";

class RegistroController {

  async pessoa(request: Request, response: Response) {
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

  async casa(request: Request, response: Response) {
    try {
      const novaCasa = await CasaSchema.create(request.body);
      response.status(201).json({
        data: novaCasa,
        error: false,
        msg: "Casa cadastrada com sucesso!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar a casa",
      });
    }
  }

  async venda(request: Request, response: Response) {
    try {
      const novaVenda = await VenderSchema.create(request.body);
      response.status(201).json({
        data: novaVenda,
        error: false,
        msg: "Venda cadastrado com sucesso!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar a venda",
      });
    }
  }

  async aluguel(request: Request, response: Response) {
    try {
      const novoAluguel = await AlugarSchema.create(request.body);
      response.status(201).json({
        data: novoAluguel,
        error: false,
        msg: "Aluguel cadastrado com sucesso!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar o aluguel",
      });
    }
  }

}

export { RegistroController };
