import mongoose, { Schema } from "mongoose"

const operacao = new Schema(
    {
    cliente: { type: Schema.Types.ObjectId, ref: "Cliente" },
    vendas: [{ type: Schema.Types.ObjectId, ref: "Vendas" }],
    },
    {
    timestamps: true,
    }
);

var OperacaoSchema = mongoose.model("Operacao", operacao);
    
export { OperacaoSchema };