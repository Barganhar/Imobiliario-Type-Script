import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from '../models/Casa';
import { Cliente } from '../models/Cliente';
import { Alugar } from '../models/Alugar';
import { Vender} from '../models/Vender';
import { Operacao } from '../models/Operacao';

@Injectable({
  providedIn: 'root'
})
export class ImobiliariaService {

  private baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  //casa
  listarCasa(): Observable<Casa[]>{
    return this.http.get<Casa[]>(`${this.baseURL}/listar/casa`);
  }

  listarCasaId(id: string): Observable<Casa>{
    return this.http.get<Casa>(`${this.baseURL}/listar/casa/${id}`);
  }

  cadastrarCasa(casa: Casa): Observable<Casa>{
    return this.http.post<Casa>(`${this.baseURL}/registro/casa`, casa);
  }

  editarCasa(id: string, casa: Casa): Observable<Casa>{
    return this.http.put<Casa>(`${this.baseURL}/casa/editar/${id}`, casa);
  }


  //cliente
  listarCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseURL}/listar/cliente`);
  }

  listarClienteId(id: string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseURL}/listar/cliente/${id}`);
  }

  Cliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseURL}/registro/cliente`, cliente);
  }

  editarCliente(id: string, cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.baseURL}/cliente/editar/${id}`, cliente);
  }


  //aluguel
  listarAluguel(): Observable<Alugar[]>{
    return this.http.get<Alugar[]>(`${this.baseURL}/listar/aluguel`);
  }

  listarAluguelId(id: string): Observable<Alugar>{
    return this.http.get<Alugar>(`${this.baseURL}/listar/aluguel/${id}`);
  }

  Aluguel(aluguel: Alugar): Observable<Alugar>{
    return this.http.post<Alugar>(`${this.baseURL}/registro/aluguel`, aluguel);
  }

  editarAluguel(id: string, aluguel: Alugar): Observable<Alugar>{
    return this.http.put<Alugar>(`${this.baseURL}/aluguel/editar/${id}`, aluguel);
  }


  //venda
  listarVenda(): Observable<Operacao[]>{
    return this.http.get<Operacao[]>(`${this.baseURL}/listar/venda`);
  }

  listarVendaId(id: string): Observable<Operacao>{
    return this.http.get<Operacao>(`${this.baseURL}/listar/venda/${id}`);
  }

  Vender(venda: Vender): Observable<Vender>{
    return this.http.post<Vender>(`${this.baseURL}/registro/venda`, venda);
  }

  editarVenda(id: string, venda: Operacao): Observable<Operacao>{
    return this.http.put<Operacao>(`${this.baseURL}/venda/editar/${id}`, venda);
  }
}
