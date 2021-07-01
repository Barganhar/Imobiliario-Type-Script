import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Casa } from '../../../models/Casa';
import { ImobiliariaService } from '../../../services/imobiliaria.service';

@Component({
  selector: 'app-editar-casa',
  templateUrl: './editar-casa.component.html',
  styleUrls: ['./editar-casa.component.css']
})
export class EditarCasaComponent implements OnInit {

  id!: string;

  casa!: Casa;

  nome!: string;

  cep!: string;

  endereco!: string;

  private routeSub: Subscription = new Subscription();

  constructor(private service: ImobiliariaService, private snack: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.listarCasaId(this.id).subscribe((casa)=>{
      this.casa=casa;
    })
  }

  editarCasa(): void{
    let casa = new Casa();
    casa._id = this.casa._id;
    casa.nome = this.nome;
    casa.endereco = this.endereco;
    casa.cep = this.cep;
    this.service.editarCasa(this.id, casa).subscribe((casa)=> {
      console.log(casa);
      this.snack.open("Casa editado", "Casas", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate([""]);
    });
  }

}
