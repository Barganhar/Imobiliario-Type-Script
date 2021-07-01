import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alugar } from '../../../models/Alugar';
import { ImobiliariaService } from '../../../services/imobiliaria.service';

@Component({
  selector: 'app-editar-aluguel',
  templateUrl: './editar-aluguel.component.html',
  styleUrls: ['./editar-aluguel.component.css']
})
export class EditarAluguelComponent implements OnInit {

  id!: string

  aluguel!: Alugar

  novoAluguel!: Alugar

  private routeSub: Subscription = new Subscription();

  constructor(private service: ImobiliariaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.listarAluguelId(this.id).subscribe((aluguel)=>{
      this.aluguel=aluguel;
    })
  }

  editar(): void{
    let aluguel = new Alugar();
    aluguel._id = this.aluguel._id;
    aluguel.nome = this.novoAluguel.nome;
    aluguel.valor = this.novoAluguel.valor;
    aluguel.status = this.novoAluguel.status;
    this.service.editarAluguel(this.id, aluguel).subscribe((aluguel)=> {
      this.aluguel = aluguel;
    })
  }
}
