import { Casa } from '../../../models/Casa';
import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';

@Component({
  selector: 'app-cadastrar-casa',
  templateUrl: './cadastrar-casa.component.html',
  styleUrls: ['./cadastrar-casa.component.css']
})
export class CadastrarCasaComponent implements OnInit {
  
  casa: Casa = new Casa;
  
  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void {
  }

  cadastrarCasa(): void{
    this.service.cadastrarCasa(this.casa).subscribe((casa) =>{
      console.log(casa);
    });
  }

}
