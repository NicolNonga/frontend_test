import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
;
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  public subjLogin$: BehaviorSubject<any | any> = new BehaviorSubject<any | any
  >('')
  
  public subLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public userData: any;
  public localStoreUser:  string = 'user'
  constructor(
    private http: HttpClient,
    private router : Router
    ) { 

  }

  public login(data:userLogin): Observable<any>{
    return this.http.post(`${environment.url}/users/auth`, data).pipe(
      tap((login)=>{
        const data = Object(login).data;
        if(data) {
          this.setvalueToStore(data)

        }
      })
    )
  }

  setvalueToStore(data){
  
    localStorage.setItem('user', JSON.stringify(data?.user));
    localStorage.setItem('token', JSON.stringify(data?.token))
    this.subjLogin$.next(this.getUser())
  }
  
 public getUser(): any{
       this.userData = JSON.parse(localStorage.getItem(this.localStoreUser))
       if(this.userData)  return this.userData
  }


  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem(this.localStoreUser);
    this.router.navigate(['/authenticioan/login'])
  }
  public  isAuthenticated(): Observable<boolean> {
    const token= this.getTokenLocalStorage;
    console.log("token", token)
     if(token) {
      this.subjLogin$.next(true);
      return of(true)
     }
     return this.subjLogin$.asObservable()
  }

  get user() {
    return  ! this.isLoggedIn ? {}:  {
      token: this.getTokenLocalStorage(),
      user: this.getUserLocalStore()
    }
  }

  get getTokenLocalStorage() {
    const value = localStorage.getItem("token") as string
    return JSON.parse(value)
    
  }
  get getUserLocalStore(){
    const value = localStorage.getItem(this.localStoreUser) as string;
    return JSON.parse(value)
  }

   public get isLoggedIn(): boolean{
    const token = this.getTokenLocalStorage;
    return token ? true : false
   }
}



interface userLogin {
        email: string,
        password: string  
}
