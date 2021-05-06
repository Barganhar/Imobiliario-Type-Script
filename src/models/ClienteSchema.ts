import { model, Schema } from "mongoose";

const ClienteSchema = new Schema(
  {
    nomeC: {
      type: String,
      required: [true, "O nome do cliente é obrigatório!"]
    },
    cpf: {
      type: String,
      required: [true, "O cpf deve ter 9 números!"]
    },
    Email:{
        type:String,
        required: [true, "O E-mail do cliente é obrigatório!"]
    },
    Renda:{
        type:Number,
        required:[true, "O valor mínimo de renda é de 130 do valor do aluguel/parcela."] 
    },
    FormaGarantia:{
      type:String,
      enum: ["TEM", "NÃO TEM"]
    }
  },
  {
    timestamps: true,
  }
);

export {ClienteSchema};