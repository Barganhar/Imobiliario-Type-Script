import { Component, OnInit } from '@angular/core';
import { Aluguel } from "src/app/models/Aluguel";
import { ImobiliariaService } from 'src/app/services/imobiliaria.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar-aluguel.component.html',
  styleUrls: ['./listar-aluguel.component.css']
})
export class ListarAluguelComponent implements OnInit {
  
  alugueis: Aluguel[] = [];

  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void {
    this.service.listarAluguel().subscribe((alugueis) => {
      this.alugueis = alugueis;
    });
  }

}
