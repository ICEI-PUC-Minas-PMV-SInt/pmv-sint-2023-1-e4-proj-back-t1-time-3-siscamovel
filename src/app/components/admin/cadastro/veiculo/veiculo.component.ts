import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculos } from 'src/app/models/veiculos.model';
import { VeiculosService } from 'src/app/services/admin/gerenciar/veiculos.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})

export class VeiculoComponent implements OnInit {

  cadastrarVeiculoRequest: Veiculos = {
    fabricante: '',
    modelo: '',
    ano: 0,
    capacidade: '',
    potencia: '',
    torque: '',
    velocidadeMaxima: '',
    tempo: '',
    volumePortaMalas: '',
    pneusRodas: '',
    garantia: '',
    preco: '',
  }

  constructor(private veiculosService: VeiculosService, private router: Router) { }

  ngOnInit(): void {
  }

  adicionarVeiculo() {
    this.veiculosService.cadastrarVeiculo(this.cadastrarVeiculoRequest)
    .subscribe({
      next:() => {
        this.router.navigate(['admin/gerenciar/veiculos']);
      }
    })
  }
}
