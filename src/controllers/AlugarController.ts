import { Request, Response } from "express";
import AlugarSchema from "../models/AlugarSchema";


class AlugarController {

  // CADASTRAR
  async alugar(request: Request, response: Response) {
    try {
      const novoAlugar = await AlugarSchema.create(request.body);
      response.status(201).json({
        data: novoAlugar,
        error: false,
        msg: "Aluguel cadastrado com sucesso!",
      });
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
      const { id } = request.params;
      const Alugar = await AlugarSchema.findOne({ _id: id });

      if (Alugar != null) {
        response.status(200).json({ data: Alugar, error: false, msg: "Aluguel encontrado!" });
      } else {
        response.status(404).json({ data: Alugar, error: false, msg: "Aluguel não encontrado!" });
      }
    } catch (error) {
      response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
    }
  }

  //DELETE
  async deletarAlugar(request: Request, response: Response) {
    try {
      const Alugar = await AlugarSchema.find();
      response.status(200).json({
        data: Alugar,
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
  
export {AlugarController};
