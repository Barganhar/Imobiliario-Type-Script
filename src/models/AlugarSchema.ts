import { model, Schema } from "mongoose";

const AlugarSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo nome é obrigatório!"],
    },
    valor: {
      type: Number,
      min: [1, "Valor mínimo de R$ 1,00"],
      required: [true, "O campo valor do aluguel é obrigatório!"],
    },
    status: {
      type: String,
      enum: ["PARA ALUGAR"],
      uppercase: true,
    },
    data: {
      type: Date,
      required: [true, "O campo data é obrigatório!"],
      min: ["2000-01-01", "Data mínima permitida: 01/01/2020"],
    },
    endereço: {
      type: String,
      required: [true, "O campo de endereço é obrigatório!"],
    },
    cep: {
      type: String,
      required: [true, "O campo de endereço é obrigatório!"],
    }
  },
  {
    timestamps: true,
  }
);

export {AlugarSchema};