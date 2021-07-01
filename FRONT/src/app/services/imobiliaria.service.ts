import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from '../models/Casa';
import { Cliente } from '../models/Cliente';
import { Alugar } from '../models/Alugar';
import { AlugarImp } from '../models/AlugarImp';
import { VenderImp } from '../models/VenderImp';
import { Vender} from '../models/Vender';

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

  deletarCasa(id: string): Observable<Casa>{
    return this.http.delete<Casa>(`${this.baseURL}/deletar/casa/${id}`);
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

  deletarCliente(id: string): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.baseURL}/deletar/cliente/${id}`);
  }


  //aluguel
  listarAluguel(): Observable<AlugarImp[]>{
    return this.http.get<AlugarImp[]>(`${this.baseURL}/listar/aluguel`);
  }

  listarAluguelId(id: string): Observable<Alugar>{
    return this.http.get<Alugar>(`${this.baseURL}/listar/aluguel/${id}`);
  }

  Aluguel(aluguel: Alugar): Observable<Alugar>{
    return this.http.post<Alugar>(`${this.baseURL}/registro/aluguel`, aluguel);
  }

  editarAluguel(id: string, aluguel: Alugar): Observable<Alugar>{
    return this.http.put<Alugar>(`${this.baseURL}/alugar/editar/${id}`, aluguel);
  }

  deletarAluguel(id: string): Observable<Alugar>{
    return this.http.delete<Alugar>(`${this.baseURL}/deletar/aluguel/${id}`);
  }


  //venda
  listarVenda(): Observable<VenderImp[]>{
    return this.http.get<VenderImp[]>(`${this.baseURL}/listar/venda`);
  }

  listarVendaId(id: string): Observable<Vender>{
    return this.http.get<Vender>(`${this.baseURL}/listar/venda/${id}`);
  }

  Vender(venda: Vender): Observable<Vender>{
    return this.http.post<Vender>(`${this.baseURL}/registro/venda`, venda);
  }

  editarVenda(id: string, venda: Vender): Observable<Vender>{
    return this.http.put<Vender>(`${this.baseURL}/vender/editar/${id}`, venda);
  }

  deletarVenda(id: string): Observable<Vender>{
    return this.http.delete<Vender>(`${this.baseURL}/deletar/venda/${id}`);
  }
}
