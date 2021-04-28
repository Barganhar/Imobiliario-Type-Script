import { model, Schema } from "mongoose";
import { VenderSchema } from "./VenderSchema";
import { AlugarSchema } from "./AlugarSchema";

const CicloSchema = new Schema(
  {
    data: {
      type: Date,
      required: [true, "O campo data é obrigatório!"],
      min: ["2000-01-01", "Data mínima permitida: 01/01/2020"],
    },
    Vender: [VenderSchema],
    Alugar: [AlugarSchema],
  },
  {
    timestamps: true,
  }
);

export default model("ciclos", CicloSchema);