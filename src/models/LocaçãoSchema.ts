import { model, Schema } from "mongoose";

const LocaçãoSchema = new Schema(
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



export default model("Locação", LocaçãoSchema);