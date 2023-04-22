import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from 'src/app/models/admin/veiculos/veiculo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class VeiculosService {

  baseApiSiscm: string = environment.baseApiSiscm;

  constructor(private http: HttpClient) { }

  getObterTodosOsVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.baseApiSiscm + '/siscm/Veiculos');
  }

  cadastrarVeiculo(cadastrarVeiculoRequest: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.baseApiSiscm + '/siscm/Veiculos', cadastrarVeiculoRequest);
  }

  obterVeiculo(id: string): Observable<Veiculo> {
    return this.http.get<Veiculo>(this.baseApiSiscm + '/siscm/Veiculos/' + id);
  }

  atualizarInfoVeiculo(id: string, atualizarInfoVeiculoRequest: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(this.baseApiSiscm + '/siscm/Veiculos/' + id, atualizarInfoVeiculoRequest);
  }

}
