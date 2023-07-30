import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public createUser(payload):Observable<any>{
    return this.http.post(`${environment.url}/users`, payload)

  }

  public getPaciente(user_id){
    return this.http.get(`${environment.url}/user_paciente/${user_id}`)
  }

 public getMedico(user_id: number){
  return this.http.get(`${environment.url}/user_medico/${user_id}`)
 }
}
