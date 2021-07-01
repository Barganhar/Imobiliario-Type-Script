import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { MatTableDataSource } from '@angular/material/table';
import { OperacaoImp } from '../../../models/OperacaoImp';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-venda.component.html',
  styleUrls: ['./listar-venda.component.css']
})
export class ListarVendaComponent implements OnInit {
  
  operacao: OperacaoImp[] = [];
  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void 
  {
    this.service.listarVenda().subscribe((operacao)=>{
      this.operacao = operacao;
      console.log(operacao)
    });
  }

}
