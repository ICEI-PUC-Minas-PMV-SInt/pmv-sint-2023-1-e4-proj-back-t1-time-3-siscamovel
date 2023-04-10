import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListarVeiculos } from 'src/app/models/admin/listar-veiculos/listar-veiculos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ListarVeiculosService {

  baseApiSiscm: string = environment.baseApiSiscm;

  constructor(private http: HttpClient) { }

  getObterTodosOsVeiculos(): Observable<ListarVeiculos[]> {
    return this.http.get<ListarVeiculos[]>(this.baseApiSiscm + '/siscm/Veiculos');
  }
}
