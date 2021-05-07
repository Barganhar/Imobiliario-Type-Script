import mongoose, { Schema } from "mongoose"

const locação = new Schema(
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



var LocaçãoSchema = mongoose.model("Locação", locação);
    
export { LocaçãoSchema };