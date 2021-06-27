import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from '../models/Casa';
import { Cliente } from '../models/Cliente';
import { Aluguel } from '../models/Aluguel';

@Injectable({
  providedIn: 'root'
})
export class ImobiliariaService {

  private baseURL = "http://localhost:4200/";

  constructor(private http: HttpClient) { }

  listarCasa(): Observable<Casa[]>{
    return this.http.get<Casa[]>(`${this.baseURL}casa/listar`);
  }

  cadastrarCasa(casa: Casa): Observable<Casa>{
    return this.http.post<Casa>(`${this.baseURL}casa/cadastrar`, casa);
  }

  listarCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseURL}cliente/listar`);
  }

  cadastrarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseURL}cliente/cadastrar`, cliente);
  }


  listarAluguel(): Observable<Aluguel[]>{
    return this.http.get<Aluguel[]>(`${this.baseURL}aluguel/listar`);
  }

  cadastrarAluguel(aluguel: Aluguel): Observable<Aluguel>{
    return this.http.post<Aluguel>(`${this.baseURL}aluguel/cadastrar`, aluguel);
  }
}
