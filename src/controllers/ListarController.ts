import { Request, Response } from "express";
import ClienteSchema from "../models/ClienteSchema";
import CasaSchema from "../models/CasaSchema";
import AlugarSchema from "../models/AlugarSchema";
import VenderSchema from "../models/VenderSchema";


class ListarController {

    async pessoa(request: Request, response: Response) {
      try {
        const { id } = request.params;
        const ciclo = await CicloSchema.findOne({ _id: id });
        // console.log(await CicloSchema.exists({ _id: id }));
        // console.log(await CicloSchema.find({ _id: id }).countDocuments());
  
        if (ciclo != null) {
          response.status(200).json({ data: ciclo, error: false, msg: "Ciclo encontrado!" });
        } else {
          response.status(404).json({ data: ciclo, error: false, msg: "Ciclo não encontrado!" });
        }
      } catch (error) {
        response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
      }
    }
  
    async casa(request: Request, response: Response) {
      try {
        const { id } = request.params;
        const ciclo = await CicloSchema.findOne({ _id: id });
        // console.log(await CicloSchema.exists({ _id: id }));
        // console.log(await CicloSchema.find({ _id: id }).countDocuments());
  
        if (ciclo != null) {
          response.status(200).json({ data: ciclo, error: false, msg: "Ciclo encontrado!" });
        } else {
          response.status(404).json({ data: ciclo, error: false, msg: "Ciclo não encontrado!" });
        }
      } catch (error) {
        response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
      }
    }
  
    async venda(request: Request, response: Response) {
      try {
        const { id } = request.params;
        const ciclo = await CicloSchema.findOne({ _id: id });
        // console.log(await CicloSchema.exists({ _id: id }));
        // console.log(await CicloSchema.find({ _id: id }).countDocuments());
  
        if (ciclo != null) {
          response.status(200).json({ data: ciclo, error: false, msg: "Ciclo encontrado!" });
        } else {
          response.status(404).json({ data: ciclo, error: false, msg: "Ciclo não encontrado!" });
        }
      } catch (error) {
        response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
      }
    }

    async aluguel(request: Request, response: Response) {
      try {
        const { id } = request.params;
        const ciclo = await CicloSchema.findOne({ _id: id });
        // console.log(await CicloSchema.exists({ _id: id }));
        // console.log(await CicloSchema.find({ _id: id }).countDocuments());
  
        if (ciclo != null) {
          response.status(200).json({ data: ciclo, error: false, msg: "Ciclo encontrado!" });
        } else {
          response.status(404).json({ data: ciclo, error: false, msg: "Ciclo não encontrado!" });
        }
      } catch (error) {
        response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
      }
    }

  }
export {ListarController};
