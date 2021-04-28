import { model, Schema } from "mongoose";

const AlugarSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo nome do crédito é obrigatório!"],
    },
    valor: {
      type: Number,
      min: [1, "Valor mínimo de R$ 1,00"],
      required: [true, "O campo valor do crédito é obrigatório!"],
    },
  },
  {
    timestamps: true,
  }
);

export { AlugarSchema };