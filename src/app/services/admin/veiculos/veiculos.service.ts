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


}
