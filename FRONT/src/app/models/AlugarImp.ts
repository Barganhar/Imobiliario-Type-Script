import { Casa } from "./Casa";

export class AlugarImp{

    _id?: string;
    nome!: string;
    valor!: number;
    status!: string;
    data!: Date;
    casa!: Casa;
    createdAt?: Date;
    updatedAt?: Date;
}