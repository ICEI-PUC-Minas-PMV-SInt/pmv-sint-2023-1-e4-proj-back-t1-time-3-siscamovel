import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/models/admin/veiculos/veiculo.model';
import { VeiculosService } from 'src/app/services/admin/veiculos/veiculos.service';

@Component({
  selector: 'app-cadastrar-veiculos',
  templateUrl: './cadastrar-veiculos.component.html',
  styleUrls: ['./cadastrar-veiculos.component.css']
})
export class CadastrarVeiculosComponent implements OnInit {

  cadastrarVeiculoRequest: Veiculo = {
    id: '',
    fabricante: '',
    modelo: '',
    ano: 0
  }

  constructor(private veiculosService: VeiculosService, private router: Router) {

  }

  ngOnInit(): void {
    
  }

  cadastrarVeiculo() {
    this.veiculosService.cadastrarVeiculo(this.cadastrarVeiculoRequest)
    .subscribe({
      next: (veiculos) => {
        this.router.navigate(['admin/veiculos/listar']);
      }
    })
  }
}
