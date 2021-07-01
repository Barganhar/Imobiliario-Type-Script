import { Alugar } from '../../../models/Alugar';
import { Component, OnInit } from '@angular/core';
import { ImobiliariaService } from '../../../services/imobiliaria.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-aluguel.component.html',
  styleUrls: ['./cadastrar-aluguel.component.css']
})
export class CadastrarAluguelComponent implements OnInit {
  
  aluguel: Alugar = new Alugar;


  constructor(private service: ImobiliariaService) {  }

  ngOnInit(): void {
  }

  Aluguel(): void{
   this.service.Aluguel(this.aluguel).subscribe((aluguel) =>{
     console.log(aluguel);
   })
  }

}
