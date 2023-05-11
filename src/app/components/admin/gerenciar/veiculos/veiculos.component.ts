import { Component, OnInit } from '@angular/core';
import { Veiculos } from 'src/app/models/veiculos.model';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  veiculos: Veiculos[] = [
    {
      fabricante: 'BYD',
      modelo: 'TAN EV',
      ano: 2022,
      capacidade: '7 lugares',
      potencia: '272 CV',
      torque: '35,7 kgfm',
      velocidadeMaxima: '186 km/h',
      tempo: '4,6 s',
      volumePortaMalas: '235/940/1655 L',
      pneusRodas: '265/40 R22',
      garantia: '5 anos',
      preco: '529.890'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.veiculos.push()
  }
}
