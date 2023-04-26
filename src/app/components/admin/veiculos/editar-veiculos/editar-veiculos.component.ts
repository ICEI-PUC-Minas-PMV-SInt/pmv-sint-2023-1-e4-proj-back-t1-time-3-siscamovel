import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/admin/veiculos/veiculo.model';
import { VeiculosService } from 'src/app/services/admin/veiculos/veiculos.service';

@Component({
  selector: 'app-editar-veiculos',
  templateUrl: './editar-veiculos.component.html',
  styleUrls: ['./editar-veiculos.component.css']
})
export class EditarVeiculosComponent implements OnInit {

  detalhesVeiculo: Veiculo = {
    id: '',
    fabricante: '',
    modelo: '',
    ano: 0
  }

  constructor(private route: ActivatedRoute, 
    private veiculosService: VeiculosService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.veiculosService.obterVeiculo(id)
          .subscribe({
            next: (response) => {
              this.detalhesVeiculo = response;
            }
          })
        }
      }
    })
  }

  atualizarVeiculo() {
    this.veiculosService.atualizarInfoVeiculo(this.detalhesVeiculo.id, this.detalhesVeiculo)
    .subscribe({
      next: (response) => {
        this.router.navigate(['admin/veiculos/listar']);
      }
    })
  }

  excluirVeiculo(id: string) {
    this.veiculosService.excluirVeiculoPlat(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['admin/veiculos/listar']);
      }
    })
  }
}
