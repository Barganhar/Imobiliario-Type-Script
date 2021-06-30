import { Request, Response } from "express";
import {ClienteSchema} from "../models/ClienteSchema";


class ClienteController {
 

  // CADASTRAR
  async cliente(request: Request, response: Response) {
    try {
      const novacliente = await ClienteSchema.create(request.body);
      response.status(201).json(novacliente);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar a cliente",
      });
    }
  }

  //LISTAR
  async listarCliente(request: Request, response: Response) {
    try {
      const listar = await ClienteSchema.find();
      response.status(200).json(listar);
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "cliente não encontrada!" });
    }
  }

  async listarClienteId(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const list = await ClienteSchema.findById({_id : id});
      response.status(200).json(list);
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "cliente não encontrada!" });
    }
  }


  //DELETE
  async deletarCliente(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const locação = await ClienteSchema.deleteOne({_id : id});
      response.status(200).json(locação);
    } catch (error) {
      response.status(400).json({data: error, error: true, msg: "Não foi possível deletar a cliente", });
    }
  }

  async editar(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const body = request.body;

      await ClienteSchema.findOneAndUpdate({ _id: id }, body, {
        returnOriginal: false,
        useFindAndModify: false,
      });

      response.status(204).json({});
    } catch (error) {
      response.status(400).json({
        error: true,
        data: error.message,
        msg: "Não foi possível concluir esta edição.",
      });
    }
  }
}

  
export {ClienteController};