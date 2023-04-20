import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/admin/veiculos/veiculo.model';
import { VeiculosService } from 'src/app/services/admin/veiculos/veiculos.service';

@Component({
  selector: 'app-listar-veiculos',
  templateUrl: './listar-veiculos.component.html',
  styleUrls: ['./listar-veiculos.component.css']
})
export class ListarVeiculosComponent implements OnInit {
  
  veiculos: Veiculo[] = [];

  constructor(private listarVeiculosService: VeiculosService) {}

  ngOnInit(): void {
    this.listarVeiculosService.getObterTodosOsVeiculos()
    .subscribe({
      next: (veiculos) => {
        this.veiculos = veiculos;
      },
      error: (response) => {
        console.log(response);
      },
    })
  }
}
