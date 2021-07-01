import { Vender } from '../../../models/Vender';
import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-venda.component.html',
  styleUrls: ['./cadastrar-venda.component.css']
})
export class CadastrarVendaComponent implements OnInit {
  
    nome! : string;
    valor!: number;
    status! : string;
    data! : Date;

    constructor(private service: ImobiliariaService, private snack: MatSnackBar, private router: Router) { }
  
    ngOnInit(): void { }
  
    Vender()
    {
      let vender = new Vender();
      vender.nome = this.nome;
      vender.valor = this.valor;
      vender.status = this.status;
      vender.data = this.data;
      console.log(vender)
      this.service.Vender(vender).subscribe((vender) =>{
      console.log(vender);
      this.snack.open("Venda cadastrado com sucesso", "Vender", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate(["../../listar/venda"]);
  
      });
    }

}
