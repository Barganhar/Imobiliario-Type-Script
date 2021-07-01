import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from '../../../models/Cliente';
import { ImobiliariaService } from '../../../services/imobiliaria.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  id!: string

  cliente!: Cliente

  novoCliente!: Cliente

  private routeSub: Subscription = new Subscription();

  constructor(private service: ImobiliariaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.listarClienteId(this.id).subscribe((cliente)=>{
      this.cliente=cliente;
    })
  }

  editar(): void{
    let cliente = new Cliente();
    cliente._id = this.cliente._id;
    cliente.nome = this.novoCliente.nome;
    cliente.cpf = this.novoCliente.cpf;
    cliente.Email = this.novoCliente.Email;
    cliente.Renda = this.novoCliente.Renda;
    cliente.FormaGarantia = this.novoCliente.FormaGarantia
    this.service.editarCliente(this.id, cliente).subscribe((cliente)=> {
      this.cliente = cliente;
    })
  }

}
