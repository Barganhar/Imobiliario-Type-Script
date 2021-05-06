import { model, Schema } from "mongoose";

const VenderSchema = new Schema(
  {
    nomeV: {
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
      enum: ["À VENDA", "VENDIDO"],
      uppercase: true,
    },
    endereço: {
      type: String,
      required: [true, "O campo de endereço é obrigatório!"],
    },
    cep: {
      type: String,
      required: [true, "O campo de endereço é obrigatório!"],
    },
    data: {
      type: Date,
      required: [true, "O campo data é obrigatório!"],
      min: ["2000-01-01", "Data mínima permitida: 01/01/2020"],
    }
  },
  {
    timestamps: true,
  }
);

export{VenderSchema}; 