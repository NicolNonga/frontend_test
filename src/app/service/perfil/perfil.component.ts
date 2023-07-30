import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

     user_name: string
     perfil: string
     email: string

  constructor(private authService: LoginServiceService) { }

  ngOnInit(): void {
    this.user_name= this.authService.getUser().username;
    this.perfil = this.authService.getUser().user_type
    this.email = this.authService.getUser().email
  
  }

    
}
