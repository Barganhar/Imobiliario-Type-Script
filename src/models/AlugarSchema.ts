import mongoose, { Schema } from "mongoose"

const alugar = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O nome do locatário é obrigatório!"],
    },
    valor: {
      type: Number,
      min: [500, "Valor mínimo de R$ 500,00"],
      required: [true, "O valor do aluguel é obrigatório!"],
    },
    status: {
      type: String,
      enum: ["PARA ALUGAR", "ALUGADO"],
      uppercase: true,
    },
    data: {
      type: Date,
      required: [true, "A data da locação é obrigatória"],
      min: ["2000-01-01", "Data mínima permitida: 01/01/2000"],
    },
  },
  {
    timestamps: true,
  }
);

var AlugarSchema = mongoose.model("Alugar", alugar);

export { AlugarSchema };