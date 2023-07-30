import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http:HttpClient) { }

  public create(payload): Observable<any>{
    return this.http.post(`${environment.url}/medicos`, payload)
  }


  public listarTodos(): Observable<any>{
    return this.http.get(`${environment.url}/medicos`)
  }

  
}
