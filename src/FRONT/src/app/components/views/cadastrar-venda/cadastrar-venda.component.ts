import { Venda } from '../../../models/Venda';
import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-venda.component.html',
  styleUrls: ['./cadastrar-venda.component.css']
})
export class CadastrarVendaComponent implements OnInit {
  colunasVenda = ["nomeVenda","valor","status", "criadoEm"]

  data!: string;

  nomeVenda!: string;
  valor!: number;
  status!: string;


  constructor(private service: ImobiliariaService, private router: Router, private snack: MatSnackBar) {  }

  ngOnInit(): void {
  }

  cadastrarVenda(): void{
    let venda = new Venda();
    venda.nome = this.nomeVenda;
    venda.valor = this.valor;
    venda.status = this.status;
    this.service.cadastrarVenda(venda).subscribe((venda => {
      console.log(venda);
      this.snack.open("Venda cadastrado com sucesso", "Venda", {
        duration: 4200,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate(["/venda/listar"]);
    }));
  }

}
