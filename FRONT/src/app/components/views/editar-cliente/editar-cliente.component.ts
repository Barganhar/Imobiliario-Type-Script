import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from '../../../models/Cliente';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  id!: string;

  cliente!: Cliente;

  nome!: string;

  cpf!: string;

  Email!: string;

  Renda!: Number;

  FormaGarantia!: string;

  private routeSub: Subscription = new Subscription();

  constructor(private service: ImobiliariaService, private snack: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.listarClienteId(this.id).subscribe((cliente)=>{
      this.cliente=cliente;
    })
  }

  editarCliente(): void{
    let cliente = new Cliente();
    cliente._id = this.cliente._id;
    cliente.nome = this.nome;
    cliente.cpf = this.cpf;
    cliente.Email = this.Email;
    cliente.Renda = this.Renda;
    cliente.FormaGarantia = this.FormaGarantia
    this.service.editarCliente(this.id, cliente).subscribe((cliente)=> {
      console.log(cliente);
      this.snack.open("Cliente criado", "Clientes", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate([""]);
    });
  }

}
