import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrauParentescoService {

  constructor(private http: HttpClient) { 

  }

  public criar(payload):Observable<any> {
    return this.http.post(`${environment.url}/grau_parantestcos`, payload)
  }

  public listarTodas():Observable<any>{
    return this.http.get(`${environment.url}/grau_parantestcos`)
  }
}
