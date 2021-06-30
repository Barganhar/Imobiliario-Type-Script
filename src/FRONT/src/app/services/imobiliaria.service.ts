import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from '../models/Casa';
import { Cliente } from '../models/Cliente';
import { Aluguel } from '../models/Aluguel';
import { Venda } from '../models/Venda';

@Injectable({
  providedIn: 'root'
})
export class ImobiliariaService {

  private baseURL = "http://localhost:4200/";

  constructor(private http: HttpClient) { }

  listarCasa(): Observable<Casa[]>{
    return this.http.get<Casa[]>(`${this.baseURL}listar/casa`);
  }

  cadastrarCasa(casa: Casa): Observable<Casa>{
    return this.http.post<Casa>(`${this.baseURL}registro/casa`, casa);
  }

  listarCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseURL}listar/cliente`);
  }

  Cliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseURL}registro/cliente`, cliente);
  }

  listarAluguel(): Observable<Aluguel[]>{
    return this.http.get<Aluguel[]>(`${this.baseURL}listar/aluguel`);
  }

  cadastrarAluguel(aluguel: Aluguel): Observable<Aluguel>{
    return this.http.post<Aluguel>(`${this.baseURL}registro/aluguel`, aluguel);
  }

  listarVenda(): Observable<Venda[]>{
    return this.http.get<Venda[]>(`${this.baseURL}listar/venda`);
  }

  cadastrarVenda(venda: Venda): Observable<Venda>{
    return this.http.post<Venda>(`${this.baseURL}registro/venda`, venda);
  }
}
