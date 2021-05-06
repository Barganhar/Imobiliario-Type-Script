import { Request, Response } from "express";
import Locação from "../models/LocaçãoSchema";


class AlugarController {

  // CADASTRAR
  async alugar(request: Request, response: Response) {
    try {
      const novoAlugar = await Locação.create(request.body);
      response.status(201).json({data: novoAlugar, error: false, msg: "Aluguel cadastrado com sucesso!",});
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
      const LOCAÇÃO = await Locação.find();
      response.status(200).json({ data: LOCAÇÃO, error: false, msg: "LOCAÇÃO encontrada!" });
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "LOCAÇÃO não encontrada!" });
    }
  }

  async listarAlugarId(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const LOCAÇÃO = await Locação.findById({_id : id});
      response.status(200).json({ data: LOCAÇÃO, error: false, msg: "LOCAÇÃO encontrada!" });
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "LOCAÇÃO não encontrada!" });
    }
  }


  //DELETE
  async deletarAlugar(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const locação = await Locação.deleteOne({_id : id});
      response.status(200).json({data: locação, error: false, msg: "Registro deletado",});
    } catch (error) {
      response.status(400).json({data: error, error: true, msg: "Não foi possível deletar o registro", });
    }
  }

}
  
export {AlugarController};
