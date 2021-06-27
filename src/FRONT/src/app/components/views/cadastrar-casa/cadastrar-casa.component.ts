import { Casa } from 'src/app/models/Casa';
import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from 'src/app/services/imobiliaria.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-casa',
  templateUrl: './cadastrar-casa.component.html',
  styleUrls: ['./cadastrar-casa.component.css']
})
export class CadastrarCasaComponent implements OnInit {
  colunasCasa = ["nomeCasa","cep","endereco"]

  nomeCasa!: string;
  cep!: string;
  endereco!: string;

  constructor(private service: ImobiliariaService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  cadastrarCasa(): void{
    let casa = new Casa();
    casa.nome = this.nomeCasa;
    casa.cep = this.cep;
    casa.endereco = this.endereco;
    this.service.cadastrarCasa(casa).subscribe((casa => {
      console.log(casa);
      this.snack.open("Casa cadastrada com sucesso", "Casa", {
        duration: 4200,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate(["/casa/listar"]);
    }));
  }

}
