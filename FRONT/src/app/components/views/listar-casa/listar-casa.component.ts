import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { Component, OnInit } from '@angular/core';
import { Casa } from '../../../models/Casa';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-casa',
  templateUrl: './listar-casa.component.html',
  styleUrls: ['./listar-casa.component.css']
})
export class ListarCasaComponent implements OnInit {

  colunasCasas: string[] = ['nome', 'endereco', 'cep', 'editar', 'deletar'];
  casasTable = new MatTableDataSource<Casa>();
  casas: Casa[] = [];

  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void {
    this.service.listarCasa().subscribe((casas) => {
      this.casas = casas;
    });
  }
  }


