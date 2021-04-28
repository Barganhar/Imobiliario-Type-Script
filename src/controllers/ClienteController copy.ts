import { Request, Response } from "express";
import ClienteSchema from "../models/ClienteSchema";


class ClienteController {

  // CADASTRAR
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

  //LISTAR
  async pessoa(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const cliente = await ClienteSchema.findOne({ _id: id });

      if (cliente != null) {
        response.status(200).json({ data: cliente, error: false, msg: "Cliente encontrado!" });
      } else {
        response.status(404).json({ data: cliente, error: false, msg: "Cliente não encontrado!" });
      }
    } catch (error) {
      response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
    }
  }

  //DELETE
  async pessoa(request: Request, response: Response) {
    try {
      const cliente = await ClienteSchema.find();
      response.status(200).json({
        data: cliente,
        error: false,
        msg: "Lista de ciclos de pagamento atualizada!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível listar os ciclos de pagamento",
      });
    }
  }


  
export {ClienteController};
