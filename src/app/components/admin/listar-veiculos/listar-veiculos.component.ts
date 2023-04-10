import { Component, OnInit } from '@angular/core';
import { ListarVeiculos } from 'src/app/models/admin/listar-veiculos/listar-veiculos.model';
import { ListarVeiculosService } from 'src/app/services/admin/listar-veiculos.service';

@Component({
  selector: 'app-listar-veiculos',
  templateUrl: './listar-veiculos.component.html',
  styleUrls: ['./listar-veiculos.component.css']
})
export class ListarVeiculosComponent implements OnInit {
  
  veiculos: ListarVeiculos[] = [];

  constructor(private listarVeiculosService: ListarVeiculosService) {}

  ngOnInit(): void {
    this.listarVeiculosService.getObterTodosOsVeiculos()
    .subscribe({
      next: (veiculos) => {
        console.log(veiculos);
      },
      error: (response) => {
        console.log(response);
      },
    })
  }
}
