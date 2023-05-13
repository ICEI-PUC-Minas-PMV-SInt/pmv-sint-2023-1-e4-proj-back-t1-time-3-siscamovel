import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculos } from 'src/app/models/veiculos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  baseApiUrl: string = environment.baseApiSiscm;

  constructor(private http: HttpClient) { }

  getObterTodosOsVeiculos(): Observable<Veiculos[]> {
    return this.http.get<Veiculos[]>(this.baseApiUrl + '/siscm/v1/Veiculos');
  }

  cadastrarVeiculo(cadastrarVeiculoRequest: Veiculos): Observable<Veiculos> {
    cadastrarVeiculoRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Veiculos>(this.baseApiUrl + '/siscm/v1/Veiculos', cadastrarVeiculoRequest);
  }

  getObterVeiculos(id: string): Observable<Veiculos> {
    return this.http.get<Veiculos>(this.baseApiUrl + '/siscm/v1/Veiculos/' + id);
  }

  atualizarInfoVeiculo(id: string, atualizarInfoVeiculoRequest: Veiculos): Observable<Veiculos> {
    return this.http.put<Veiculos>(this.baseApiUrl + '/siscm/v1/Veiculos/' + id, atualizarInfoVeiculoRequest)
  }

  excluirVeiculo(id: string): Observable<Veiculos> {
    return this.http.delete<Veiculos>(this.baseApiUrl + '/siscm/v1/Veiculos/' + id);
  }

}
