import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alugar } from '../../../models/Alugar';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-editar-aluguel',
  templateUrl: './editar-aluguel.component.html',
  styleUrls: ['./editar-aluguel.component.css']
})
export class EditarAluguelComponent implements OnInit {
  [x: string]: any;

  id!: string

  aluguel!: Alugar

  novoAluguel!: Alugar

  private routeSub: Subscription = new Subscription();

  constructor(private service: ImobiliariaService, private snack: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

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
    aluguel._id = this._id;
    aluguel.nome = this.nome;
    aluguel.valor = this.valor;
    aluguel.status = this.status;
    this.service.editarAluguel(this.id, aluguel).subscribe((aluguel)=> {
      this.aluguel = aluguel;
      this.snack.open("Alugueis cadastrados", "Alugueis", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate([""]);
    });
  }

}
