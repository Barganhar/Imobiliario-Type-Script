import { model, Schema } from "mongoose";

import {VenderSchema} from "./VenderSchema";
import {ClienteSchema} from "./ClienteSchema";

const ImobiliariaSchema = new Schema(
    {
    cliente: [ClienteSchema],
    vendas: [VenderSchema],
    },
    {
    timestamps: true,
    }
);

export default model("Imobiliaria", ImobiliariaSchema);