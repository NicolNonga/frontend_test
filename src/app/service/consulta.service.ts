import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http:HttpClient) { }

  public create(payload): Observable<any>{
    return this.http.post(`${environment.url}/consultas`, payload)
  }
   
  public minhasConsulta(paciente_id: number):Observable<any>{
    return this.http.get(`${environment.url}/consultas/paciente/${paciente_id}`)
  }

  public medicoConsulta(medico_id: number):any{
    return this.http.get(`${environment.url}/consultas/medico/${medico_id}`)
  }
  public todas(): Observable<any>{
    return this.http.get(`${environment.url}/consultas`)
  }

  public aceitarConsulta(id, payload){
    return this.http.put(`${environment.url}/consultas/update/${id}`, payload)
  }
   
  public addMedico(id, payload){
    return this.http.put(`${environment.url}/consultas/add_medico/${id}`, payload)
  }
}
