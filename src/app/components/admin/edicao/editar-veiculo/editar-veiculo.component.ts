import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculos } from 'src/app/models/veiculos.model';
import { VeiculosService } from 'src/app/services/admin/gerenciar/veiculos.service';

@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css']
})
export class EditarVeiculoComponent implements OnInit {

  detalhesVeiculo: Veiculos = {
    id: '',
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

  constructor(private route: ActivatedRoute, private veiculosService: VeiculosService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (parametros) => {
        const id = parametros.get('id');

        if (id) {
          this.veiculosService.getObterVeiculos(id)
          .subscribe({
            next: (response) => {
              this.detalhesVeiculo = response;
            }
          })
        }
      }
    })
  }

  editarVeiculo() {
    this.veiculosService.atualizarInfoVeiculo(this.detalhesVeiculo.id, this.detalhesVeiculo)
    .subscribe({
      // response
      next: () => {
        this.router.navigate(['admin/gerenciar/veiculos']);
      }
    })
  }
}
