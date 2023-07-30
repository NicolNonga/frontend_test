import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, Route, UrlSegment, UrlTree, Router } from "@angular/router";
import { LoginServiceService } from "../service/login-service.service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate  {
    constructor(
       private auth: LoginServiceService,
       private router : Router
    ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     
        return this.auth.isAuthenticated().pipe(
            tap((b)=>{
                if(!b){
                    this.router.navigate(['/authenticioan/login'])
                    return false
                }
                return true
            })
        )
    }

}