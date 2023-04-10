import { Component, OnInit } from '@angular/core';
import { ListarVeiculos } from 'src/app/models/admin/listar-veiculos/listar-veiculos.model';

@Component({
  selector: 'app-listar-veiculos',
  templateUrl: './listar-veiculos.component.html',
  styleUrls: ['./listar-veiculos.component.css']
})
export class ListarVeiculosComponent implements OnInit {
  
  veiculos: ListarVeiculos[] = [
    {
      id: '1',
      fabricante: 'BYD',
      modelo: 'TAN EV',
      ano: 2022
    }
  ]

  constructor() {}

  ngOnInit(): void {
    this.veiculos.push()
  }
}
