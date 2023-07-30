import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  public criar(payload):Observable<any> {
    return this.http.post(`${environment.url}/pacientes`, payload)
  }

  public listarTodas():Observable<any>{
    return this.http.get(`${environment.url}/pacientes`)
  }
}
