import { Schema } from "mongoose";

const ClienteSchema = new Schema(
  {
    nome: {
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
        min: [650, "o valor mínimo de renda é R$:650,00"],
        required: [true, "O valor da renda é obrigatório."]
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