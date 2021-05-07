import mongoose, { Schema } from "mongoose"

const operação = new Schema(
    {
    cliente: { type: Schema.Types.ObjectId, ref: "Cliente" },
    vendas: [{ type: Schema.Types.ObjectId, ref: "Vendas" }],
    },
    {
    timestamps: true,
    }
);

var OperaçãoSchema = mongoose.model("Operação", operação);
    
export { OperaçãoSchema };