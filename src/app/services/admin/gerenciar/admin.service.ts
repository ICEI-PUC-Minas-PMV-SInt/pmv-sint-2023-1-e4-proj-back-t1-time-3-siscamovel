import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admins } from 'src/app/models/admins.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseApiUrl: string = environment.baseApiSiscm;

  constructor(private http: HttpClient) { }

  getObterTodosAdmins(): Observable<Admins[]> {
    return this.http.get<Admins[]>(this.baseApiUrl + '/siscm/v1/Admins');
  }

  cadastrarAdmin(cadastrarAdminRequest: Admins): Observable<Admins> {
    cadastrarAdminRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Admins>(this.baseApiUrl + '/siscm/v1/Admins', cadastrarAdminRequest);
  }

  getObterAdmin(id: string): Observable<Admins> {
    return this.http.get<Admins>(this.baseApiUrl + '/siscm/v1/Admins/' + id);
  }

  atualizarInfoAdmin(id: string, atualizarInfoAdminRequest: Admins): Observable<Admins> {
    return this.http.put<Admins>(this.baseApiUrl + '/siscm/v1/Admins/' + id, atualizarInfoAdminRequest)
  }

  excluirAdmin(id: string): Observable<Admins> {
    return this.http.delete<Admins>(this.baseApiUrl + '/siscm/v1/Admins/' + id);
  }

}
