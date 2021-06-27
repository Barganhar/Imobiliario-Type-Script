import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from '../models/Casa';

@Injectable({
  providedIn: 'root'
})
export class ImobiliariaService {

  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  listar(): Observable<Casa[]>{
    return this.http.get<Casa[]>(`${this.baseURL}casa/listar`);
  }

  cadastrarCasa(casa: Casa): Observable<Casa>{
    return this.http.post<Casa>(`${this.baseURL}casa/cadastrar`, casa);
  }
}
