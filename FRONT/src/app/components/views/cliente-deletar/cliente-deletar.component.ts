import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from '../../../models/Cliente';
import { ImobiliariaService } from '../../../services/imobiliaria.service';

@Component({
  selector: 'app-cliente-deletar',
  templateUrl: './cliente-deletar.component.html',
  styleUrls: ['./cliente-deletar.component.css']
})
export class ClienteDeletarComponent implements OnInit {

  id!: string;
  cliente!: Cliente;

  private routeSub: Subscription = new Subscription();

  constructor(private service: ImobiliariaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    this.service.listarClienteId(this.id).subscribe((cliente) =>{
      this.cliente = cliente;
    });
  }

  deletarCliente(): void{
    this.service.deletarCliente(this.id).subscribe((cliente) =>{
      this.cliente = cliente;
    })
  }
}
