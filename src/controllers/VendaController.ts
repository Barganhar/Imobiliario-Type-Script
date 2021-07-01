import { Request, Response } from "express";
import {OperacaoSchema} from "../models/OperacaoSchema";
import {VenderSchema} from "../models/VenderSchema";


class VendaController {

  // CADASTRAR
  async venda(request: Request, response: Response) {
    try {
      const novaVenda = await VenderSchema.create(request.body);
      response.status(201).json(novaVenda);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar a Venda"
      });
    }
  }

  //LISTAR
  async listarVenda(request: Request, response: Response) {
    try {
      const VENDA = await OperacaoSchema.find();
      response.status(200).json(VENDA);
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "VENDA não encontrada!" });
    }
  }

  async listarVendaId(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const VENDA = await OperacaoSchema.findById({_id : id})
      response.status(200).json(VENDA);
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "VENDA não encontrada!" });
    }
  }

  //DELETE
  async deletarVenda(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const venda = await OperacaoSchema.deleteOne({_id : id});
      response.status(200).json(venda);
    } catch (error) {
      response.status(400).json({data: error, error: true, msg: "Não foi possível deletar o registro", });
    }
  }

  //EDITAR

  async editar(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const body = request.body;

      await OperacaoSchema.findOneAndUpdate({ _id: id }, body, {
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
  
export{VendaController};
