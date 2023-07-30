import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspeicalidadeService {

  constructor(private http: HttpClient) { 

   
  }
  public criarEspecialidade(payload):Observable<any> {
    return this.http.post(`${environment.url}/especialiddes`, payload)
  }

  public listarTodas():Observable<any>{
    return this.http.get(`${environment.url}/especialiddes`)
  }
}
