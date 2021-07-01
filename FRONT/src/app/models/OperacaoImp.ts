import { Cliente } from "./Cliente";
import { Vender } from "./Vender";

export class OperacaoImp{

    _id!: String;
    cliente!: Cliente;
    vendas!: Vender;
    createdAt?: Date;
    updatedAt?: Date;
}