import { Request, Response } from "express";
import ClienteSchema from "../models/ClienteSchema";
import CasaSchema from "../models/CasaSchema";
import AlugarSchema from "../models/AlugarSchema";
import VenderSchema from "../models/VenderSchema";

class DeletarController {
  
    async pessoa(request: Request, response: Response) {
      try {
        const cliente = await ClienteSchema.find();
        response.status(200).json({
          data: cliente,
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
  
    async casa(request: Request, response: Response) {
      try {
        const { id } = request.params;
        const casa = await CasaSchema.findOne({ _id: id });
        // console.log(await CicloSchema.exists({ _id: id }));
        // console.log(await CicloSchema.find({ _id: id }).countDocuments());
  
        if (casa != null) {
          response.status(200).json({ data: casa, error: false, msg: "Ciclo encontrado!" });
        } else {
          response.status(404).json({ data: casa, error: false, msg: "Ciclo não encontrado!" });
        }
      } catch (error) {
        response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
      }
    }
  
    async venda(request: Request, response: Response) {
      try {
        const novoCasa = await CasaSchema.create(request.body);
        response.status(201).json({
          data: novoCasa,
          error: false,
          msg: "Ciclo cadastrado com sucesso!",
        });
      } catch (error) {
        response.status(400).json({
          data: error,
          error: true,
          msg: "Não foi possível adicionar o ciclo",
        });
      }
    }

    async aluguel(request: Request, response: Response) {
      try {
        const novoCiclo = await CicloSchema.create(request.body);
        response.status(201).json({
          data: novoCiclo,
          error: false,
          msg: "Ciclo cadastrado com sucesso!",
        });
      } catch (error) {
        response.status(400).json({
          data: error,
          error: true,
          msg: "Não foi possível adicionar o ciclo",
        });
      }
    }
  }
export {DeletarController};
