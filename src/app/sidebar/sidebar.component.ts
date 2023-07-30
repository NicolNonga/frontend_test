import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   user_type: string
   username: string
  constructor(public authService: LoginServiceService) { }

  ngOnInit(): void {
    this.user_type = this.authService.getUser().user_type
    this.username= this.authService.getUser().username

  }

  
  isValidPermission(text){
    return true
  }

}
