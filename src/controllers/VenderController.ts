import { Request, Response } from "express";
import VenderSchema from "../models/VenderSchema";


class VenderController {

  // CADASTRAR
  async vender(request: Request, response: Response) {
    try {
      const novoVender = await VenderSchema.create(request.body);
      response.status(201).json({
        data: novoVender,
        error: false,
        msg: "Vender cadastrado com sucesso!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar o Vender",
      });
    }
  }

  //LISTAR
  async listarVender(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const Vender = await VenderSchema.findOne({ _id: id });

      if (Vender != null) {
        response.status(200).json({ data: Vender, error: false, msg: "Venda encontrada!" });
      } else {
        response.status(404).json({ data: Vender, error: false, msg: "Venda não encontrada!" });
      }
    } catch (error) {
      response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
    }
  }

  //DELETE
  async deletarVender(request: Request, response: Response) {
    try {
      const Vender = await VenderSchema.find();
      response.status(200).json({
        data: Vender,
        error: false,
        msg: "Venda deletada!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível deletar venda",
      });
    }
  }

}
  
export {VenderController};
