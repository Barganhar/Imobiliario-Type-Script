import { Casa } from "./Casa";

export class Vender{

    _id?: string;
    nome!: string;
    valor!: number;
    status!: string;
    data!: Date;
    casa!: string;
    createdAt?: Date;
    updatedAt?: Date;
}