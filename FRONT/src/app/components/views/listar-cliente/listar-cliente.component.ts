import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/Cliente';
import { ImobiliariaService } from "../../../services/imobiliaria.service";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  
  colunasClientes: string[] = ['nome', 'cpf', 'Email', 'Renda', 'FormaGarantia', 'editar', 'deletar'];
  clientesTable = new MatTableDataSource<Cliente>();
  clientes: Cliente[] = [];

  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void {
    this.service.listarCliente().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

}
