import { Component, OnInit } from '@angular/core';
import { Alugar } from "../../../models/Alugar";
import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-aluguel.component.html',
  styleUrls: ['./listar-aluguel.component.css']
})
export class ListarAluguelComponent implements OnInit {
  
  colunasAlugueis: string[] = ['nome', 'valor', 'status', 'editar', 'deletar'];
  alugueisTable = new MatTableDataSource<Alugar>();
  alugueis: Alugar[] = [];

  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void {
    this.service.listarAluguel().subscribe((alugueis) => {
      this.alugueis = alugueis;
    });
  }

}
