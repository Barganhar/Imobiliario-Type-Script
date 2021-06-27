import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ImobiliariaService } from "./../../../services/imobiliaria.service";

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  
  clientes: Cliente[] = [];

  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void {
    this.service.listarCliente().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

}
