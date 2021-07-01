import { Request, Response } from "express";
import {CasaSchema} from "../models/CasaSchema";


class CasaController {
 

  // CADASTRAR
  async casa(request: Request, response: Response) {
    try {
      const novaCasa = await CasaSchema.create(request.body);
      response.status(201).json(novaCasa);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar a Casa",
      });
    }
  }

  //LISTAR
  async listarCasa(request: Request, response: Response) {
    try {
      const listar = await CasaSchema.find();
      response.status(200).json(listar);
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "casa não encontrada!" });
    }
  }

  async listarCasaId(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const list = await CasaSchema.findById({_id : id});
      response.status(200).json(list);
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "casa não encontrada!" });
    }
  }


  //DELETE
  async deletarCasa(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const locação = await CasaSchema.deleteOne({_id : id});
      response.status(200).json(locação);
    } catch (error) {
      response.status(400).json({data: error, error: true, msg: "Não foi possível deletar a casa", });
    }
  }

  async editar(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const body = request.body;

      await CasaSchema.findOneAndUpdate({ _id: id }, body, {
        returnOriginal: false,
        useFindAndModify: false,
      });

      response.status(204).json({});
    } catch (error) {
      response.status(400).json({
        error: true,
        data: error,
        msg: "Não foi possível concluir esta edição.",
      });
    }
  }
}

  
export {CasaController};