import { Request, Response } from "express";
import ImobiliariaSchema from "../models/ImobiliariaSchema";


class ClienteController {

  // CADASTRAR
  async cliente(request: Request, response: Response) {
    try {
      const novoCliente = await ImobiliariaSchema.create(request.body);
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
  async listarCliente(request: Request, response: Response) {
    try {
      const cliente = await ImobiliariaSchema.find();

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
  async deletarCliente(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const cliente = await ImobiliariaSchema.deleteOne({_id : id});
      response.status(200).json({
        data: cliente,
        error: false,
        msg: "Registro deletado",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível deletar os registros",
      });
    }
  }


}
  
export {ClienteController};
