import { Request, Response } from "express";
import {OperaçãoSchema} from "../models/OperaçãoSchema";
import {VenderSchema} from "../models/VenderSchema";


class VendaController {

  // CADASTRAR
  async venda(request: Request, response: Response) {
    try {
      const novaVenda = await VenderSchema.create(request.body);
      response.status(201).json({
        data: novaVenda,
        error: false,
        msg: "Venda cadastrado com sucesso!",
      });
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
      const VENDA = await OperaçãoSchema.find();
      response.status(200).json({ data: VENDA, error: false, msg: "VENDA encontrada!" });
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "VENDA não encontrada!" });
    }
  }

  async listarVendaId(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const VENDA = await OperaçãoSchema.findById({_id : id})
      response.status(200).json({ data: VENDA, error: false, msg: "VENDA encontrada!" });
    } catch (error) {
      response.status(404).json({ data: error, error: true, msg: "VENDA não encontrada!" });
    }
  }

  //DELETE
  async deletarVenda(request: Request, response: Response) {
    const {id} = request.params;
    try {
      const venda = await OperaçãoSchema.deleteOne({_id : id});
      response.status(200).json({data: venda, error: false, msg: "Registro deletado",});
    } catch (error) {
      response.status(400).json({data: error, error: true, msg: "Não foi possível deletar o registro", });
    }
  }

  //EDITAR

  async editar(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const body = request.body;

      await OperaçãoSchema.findOneAndUpdate({ _id: id }, body, {
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
