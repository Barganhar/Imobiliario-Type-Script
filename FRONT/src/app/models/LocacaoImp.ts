import { Alugar } from "./Alugar";
import { Cliente } from "./Cliente";

export class OperacaoImp{

    _id!: String;
    cliente!: Cliente;
    aluguel!: Alugar;
    createdAt?: Date;
    updatedAt?: Date;
}