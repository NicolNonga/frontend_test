import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiliatarService {
  constructor(private http:HttpClient) { }

  public create(payload): Observable<any>{
    return this.http.post(`${environment.url}/militars`, payload)
  }

  public listarTodas():Observable<any>{
    return this.http.get(`${environment.url}/militars`)
  }
}
