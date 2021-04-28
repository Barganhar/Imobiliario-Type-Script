import { model, Schema } from "mongoose";

const VenderSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O nome do vendedor é obrigatório!"],
    },
    valor: {
      type: Number,
      min: [1, "Valor mínimo de R$ 1,00"],
      required: [true, "O valor da venda é obrigatório!"],
    },
    status: {
      type: String,
      enum: ["VENDIDO", "À VENDA"],
      uppercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("casa", VenderSchema);