import { Component, OnInit } from '@angular/core';
import { Venda } from "../../../models/Venda";
import { ImobiliariaService } from '../../../services/imobiliaria.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar-venda.component.html',
  styleUrls: ['./listar-venda.component.css']
})
export class ListarVendaComponent implements OnInit {
  
  vendas: Venda[] = [];

  constructor(private service: ImobiliariaService) { }

  ngOnInit(): void {
    this.service.listarVenda().subscribe((vendas) => {
      this.vendas = vendas;
    });
  }

}
