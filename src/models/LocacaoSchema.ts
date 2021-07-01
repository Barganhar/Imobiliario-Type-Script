import mongoose, { Schema } from "mongoose"

const locacao = new Schema(
  {  
    data: {
        type: Date,
        required: [true, "O campo DATA é obrigatório!"],
      },
    cliente: { type: Schema.Types.ObjectId, ref: "Cliente" },
    aluguel: [{ type: Schema.Types.ObjectId, ref: "Aluguel" }],
    },
    {
    timestamps: true,
    }
);



var LocacaoSchema = mongoose.model("Locacao", locacao);
    
export { LocacaoSchema };