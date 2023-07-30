import { Component, Input, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public layoutNavigationTop: boolean = true;

   username: string
  constructor(
    public auth: LoginServiceService,
    private router : Router
  ) {
      this.username= this.auth.getUser().username
   }

  ngOnInit(): void {
  }


   public logout(){
         this.router.navigate(['/authenticioan/login'])
   }

}
