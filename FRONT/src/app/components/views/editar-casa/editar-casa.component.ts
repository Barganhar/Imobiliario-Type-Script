import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Casa } from '../../../models/Casa';
import { ImobiliariaService } from '../../../services/imobiliaria.service';

@Component({
  selector: 'app-editar-casa',
  templateUrl: './editar-casa.component.html',
  styleUrls: ['./editar-casa.component.css']
})
export class EditarCasaComponent implements OnInit {

  id!: string

  casa!: Casa

  novoCasa!: Casa

  private routeSub: Subscription = new Subscription();

  constructor(private service: ImobiliariaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.listarCasaId(this.id).subscribe((casa)=>{
      this.casa=casa;
    })
  }

  editar(): void{
    let casa = new Casa();
    casa._id = this.casa._id;
    casa.nome = this.novoCasa.nome;
    casa.cep = this.novoCasa.cep;
    casa.endereco = this.novoCasa.endereco;
    this.service.editarCasa(this.id, casa).subscribe((casa)=> {
      this.casa = casa;
    })
  }

}
