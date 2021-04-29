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
        msg: "Casa cadastrado com sucesso!",
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
        response.status(200).json({ data: Casa, error: false, msg: "Casa encontrado!" });
      } else {
        response.status(404).json({ data: Casa, error: false, msg: "Casa não encontrado!" });
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

}
  
export {CasaController};
