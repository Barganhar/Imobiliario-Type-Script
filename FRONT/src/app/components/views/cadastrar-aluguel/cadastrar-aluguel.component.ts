import { Alugar } from '../../../models/Alugar';
import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-aluguel.component.html',
  styleUrls: ['./cadastrar-aluguel.component.css']
})
export class CadastrarAluguelComponent implements OnInit {
  
  nome! : string;
  valor!: number;
  status! : string;
  data! : Date;

  constructor(private service: ImobiliariaService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void { }

  Aluguel()
  {
    let alugar = new Alugar();
    alugar.nome = this.nome;
    alugar.valor = this.valor;
    alugar.status = this.status;
    alugar.data = this.data;
    console.log(alugar)
    this.service.Aluguel(alugar).subscribe((alugar) =>{
    console.log(alugar);
    this.snack.open("Aluguel cadastrado com sucesso", "Aluguel", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
    this.router.navigate(["../../listar/aluguel"]);

    });
  }

}
