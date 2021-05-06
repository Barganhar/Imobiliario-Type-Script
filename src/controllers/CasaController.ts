import { Request, Response } from "express";
import CasaSchema from "../models/CasaSchema";


class CasaController {

  // CADASTRAR
  async casa(request: Request, response: Response) {
    try {
      const novoCasa = await CasaSchema.create(request.body);
      response.status(201).json({
        data: novoCasa,
        error: false,
        msg: "Casa cadastrada com sucesso!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar o Casa",
      });
    }
  }

  //LISTAR
  async listarCasa(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const Casa = await CasaSchema.findOne({ _id: id });

      if (Casa != null) {
        response.status(200).json({ data: Casa, error: false, msg: "Casa encontrada!" });
      } else {
        response.status(404).json({ data: Casa, error: false, msg: "Casa não encontrada!" });
      }
    } catch (error) {
      response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
    }
  }

  //DELETE
  async deletarCasa(request: Request, response: Response) {
    try {
      const Casa = await CasaSchema.find();
      response.status(200).json({
        data: Casa,
        error: false,
        msg: "Casa deletada da lista",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível deletar a casa da lista",
      });
    }
  }

}
  
export {CasaController};
