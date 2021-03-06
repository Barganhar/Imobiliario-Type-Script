import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { MatTableDataSource } from '@angular/material/table';
import { VenderImp } from '../../../models/VenderImp';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-venda.component.html',
  styleUrls: ['./listar-venda.component.css']
})
export class ListarVendaComponent implements OnInit {
  
  colunasVendas: string[] = ['nome', 'valor', 'status', 'data', 'editar', 'deletar'];
  vendasTable = new MatTableDataSource<VenderImp>();
  vendas: VenderImp[] = [];

  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void {
    this.service.listarVenda().subscribe((vendas) => {
      this.vendas = vendas;
      console.log(vendas)
    });
  }

}
