import { Cliente } from '../../../models/Cliente';
import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente;

  constructor(private service: ImobiliariaService) {  }

  ngOnInit(): void {
  }

  Cliente(): void{
    this.service.Cliente(this.cliente).subscribe((cliente) =>{
      console.log(cliente);
    });
  }

}