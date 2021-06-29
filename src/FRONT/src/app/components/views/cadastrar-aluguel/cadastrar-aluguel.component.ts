import { Aluguel } from '../../../models/Aluguel';
import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-aluguel.component.html',
  styleUrls: ['./cadastrar-aluguel.component.css']
})
export class CadastrarAluguelComponent implements OnInit {
  colunasAluguel = ["nomeAluguel","valor","status", "criadoEm"]

  data!: string;

  nomeAluguel!: string;
  valor!: number;
  statusAluguel!: string;


  constructor(private service: ImobiliariaService, private router: Router, private snack: MatSnackBar) {  }

  ngOnInit(): void {
  }

  cadastrar(): void{
    let aluguel = new Aluguel();
    aluguel.nome = this.nomeAluguel;
    aluguel.valor = this.valor;
    aluguel.status = this.statusAluguel;
    this.service.cadastrarAluguel(aluguel).subscribe((aluguel => {
      console.log(aluguel);
      this.snack.open("Aluguel cadastrado com sucesso", "Aluguel", {
        duration: 4200,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate(["/aluguel/listar"]);
    }));
  }

}
