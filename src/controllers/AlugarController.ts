import { Request, Response } from "express";
import {LocacaoSchema} from "../models/LocacaoSchema";
import {AlugarSchema} from "../models/AlugarSchema";

class AlugarController {

  // CADASTRAR
  async alugar(request: Request, response: Response) {
    try {
      const novoAlugar = await AlugarSchema.create(request.body);
      response.status(201).json(novoAlugar);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar o Aluguel",
      });
    }
  }

  //LISTAR
  async listarAlugar(request: Request, response: Response) {
    try {
      const loca = await AlugarSchema.find();
      response.status(200).json(loca);
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "LOCAÇÃO não encontrada!" });
    }
  }

  async listarAlugarId(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const LOCAÇÃO = await AlugarSchema.findById({_id : id});
      response.status(200).json(LOCAÇÃO);
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "LOCAÇÃO não encontrada!" });
    }
  }


  //DELETE
  async deletarAlugar(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const locacao = await AlugarSchema.deleteOne({_id : id});
      response.status(200).json(locacao);
    } catch (error) {
      response.status(400).json({data: error, error: true, msg: "Não foi possível deletar o registro", });
    }
  }

  async editar(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const body = request.body;

      await LocacaoSchema.findOneAndUpdate({ _id: id }, body, {
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

  
export {AlugarController};
