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
      enum: ["ALUGADO", "PARA ALUGAR"],
      uppercase: true,
    }
  },
  {
    timestamps: true,
  }
);

export default model("alugar", AlugarSchema);