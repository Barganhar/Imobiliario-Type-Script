import { Request, Response } from "express";
import ClienteSchema from "../models/ClienteSchema";
import CasaSchema from "../models/CasaSchema";
import AlugarSchema from "../models/AlugarSchema";
import VenderSchema from "../models/VenderSchema";


class ListarController {

    async pessoa(request: Request, response: Response) {
      try {
        const { id } = request.params;
        const cliente = await ClienteSchema.findOne({ _id: id });
  
        if (cliente != null) {
          response.status(200).json({ data: cliente, error: false, msg: "Cliente encontrado!" });
        } else {
          response.status(404).json({ data: cliente, error: false, msg: "Cliente não encontrado!" });
        }
      } catch (error) {
        response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
      }
    }
  
    async casa(request: Request, response: Response) {
      try {
        const { id } = request.params;
        const casa = await CasaSchema.findOne({ _id: id });
  
        if (casa != null) {
          response.status(200).json({ data: casa, error: false, msg: "Casa encontrada!" });
        } else {
          response.status(404).json({ data: casa, error: false, msg: "Casa não encontrada!" });
        }
      } catch (error) {
        response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
      }
    }
  
    async venda(request: Request, response: Response) {
      try {
        const { id } = request.params;
        const vender = await VenderSchema.findOne({ _id: id });
  
        if (vender != null) {
          response.status(200).json({ data: vender, error: false, msg: "Venda encontrada!" });
        } else {
          response.status(404).json({ data: vender, error: false, msg: "Venda não encontrado!" });
        }
      } catch (error) {
        response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
      }
    }

    async aluguel(request: Request, response: Response) {
      try {
        const { id } = request.params;
        const alugar = await AlugarSchema.findOne({ _id: id });
  
        if (alugar != null) {
          response.status(200).json({ data: alugar, error: false, msg: "Aluguel encontrado!" });
        } else {
          response.status(404).json({ data: alugar, error: false, msg: "Aluguel não encontrado!" });
        }
      } catch (error) {
        response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
      }
    }

  }
export {ListarController};
