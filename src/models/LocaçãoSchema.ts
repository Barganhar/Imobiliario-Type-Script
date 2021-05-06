import { model, Schema } from "mongoose";

import {ClienteSchema} from "./ClienteSchema";
import { AlugarSchema } from "./AlugarSchema";

const LocaçãoSchema = new Schema(
    {
    cliente: [ClienteSchema],
    aluguel: [AlugarSchema],
    },
    {
    timestamps: true,
    }
);

export default model("Locação", LocaçãoSchema);