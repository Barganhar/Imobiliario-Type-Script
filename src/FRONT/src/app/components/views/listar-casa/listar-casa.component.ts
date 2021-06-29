import { ImobiliariaService } from '../../../services/imobiliaria.service';
import { Component, OnInit } from '@angular/core';
import { Casa } from '../../../models/Casa';

@Component({
  selector: 'app-listar-casa',
  templateUrl: './listar-casa.component.html',
  styleUrls: ['./listar-casa.component.css']
})
export class ListarCasaComponent implements OnInit {

  casas: Casa[] = [];

  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void {
    this.service.listarCasa().subscribe((casas) => {
      this.casas = casas;
    });
  }

}
