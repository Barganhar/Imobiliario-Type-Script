import { Cliente } from '../../../models/Cliente';
import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  colunasCliente = ["nomeCliente","cpf","email", "renda", "garantia"]

  nomeCliente!: string;
  cpf!: string;
  email!: string;
  renda!: number;
  garantia!: string;



  constructor(private service: ImobiliariaService, private router: Router, private snack: MatSnackBar) {  }

  ngOnInit(): void {
  }

  cadastrarCliente(): void{
    let cliente = new Cliente();
    cliente.nome = this.nomeCliente;
    cliente.cpf = this.cpf;
    cliente.email = this.email;
    cliente.renda = this.renda;
    cliente.garantia = this.garantia;
    this.service.cadastrarCliente(cliente).subscribe((cliente => {
      console.log(cliente);
      this.snack.open("Cliente cadastrado com sucesso", "Cliente", {
        duration: 4200,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate(["/cliente/listar"]);
    }));
  }

}