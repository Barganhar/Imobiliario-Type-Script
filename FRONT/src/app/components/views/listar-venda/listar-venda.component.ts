import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { MatTableDataSource } from '@angular/material/table';
import { Operacao } from '../../../models/Operacao';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-venda.component.html',
  styleUrls: ['./listar-venda.component.css']
})
export class ListarVendaComponent implements OnInit {
  
  operacao: Operacao[] = [];
  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void 
  {
    this.service.listarVenda().subscribe((operacao)=>{
      this.operacao = operacao;
    });
  }

}
