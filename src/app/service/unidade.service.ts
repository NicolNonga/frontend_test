import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  constructor(private http:HttpClient) { }

  public criar(payload):Observable<any> {
    return this.http.post(`${environment.url}/unidades`, payload)
  }

  public listarTodas():Observable<any>{
    return this.http.get(`${environment.url}/unidades`)
  }
}
