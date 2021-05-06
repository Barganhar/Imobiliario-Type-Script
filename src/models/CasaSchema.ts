import { model, Schema } from "mongoose";

const CasaSchema = new Schema(
  {
    data: {
      type: Date,
      required: [true, "O campo data é obrigatório!"],
      min: ["2000-01-01", "Data mínima permitida: 01/01/2020"],
    },
    valorAluguel: {
      type: Number,
      min: [1 , "O valor mínimo é R$: 1,00"]
    }
  },
  {
    timestamps: true,
  }
);

export default model("casa", CasaSchema);