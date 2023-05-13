import { Component, OnInit } from '@angular/core';
import { Veiculos } from 'src/app/models/veiculos.model';
import { VeiculosService } from 'src/app/services/admin/gerenciar/veiculos.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  veiculos: Veiculos[] = [];

  buscaTexto = '';

  constructor(private veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.veiculosService.getObterTodosOsVeiculos()
    .subscribe({
      next: (veiculos) => {
        this.veiculos = veiculos;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
