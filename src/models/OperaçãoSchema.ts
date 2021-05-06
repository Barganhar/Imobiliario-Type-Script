import { model, Schema } from "mongoose";

const OperaçãoSchema = new Schema(
    {
    cliente: { type: Schema.Types.ObjectId, ref: "Cliente" },
    vendas: [{ type: Schema.Types.ObjectId, ref: "Vendas" }],
    },
    {
    timestamps: true,
    }
);

export default model("Operação", OperaçãoSchema);