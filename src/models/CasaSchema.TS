import mongoose, { Schema } from "mongoose"

const casa = new Schema(
    {
    endereço: {
        type: String,
        required: [true, "O endereço é obrigatório!"],
    },
    cep: {
        type: String,
        required: [true, "O CEP é obrigatório!"],
    }
    },
    {
        timestamps: true,
      }
    );
    
var CasaSchema = mongoose.model("Casa", casa);
    
export { CasaSchema };