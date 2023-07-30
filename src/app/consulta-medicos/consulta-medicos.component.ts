import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { LoginServiceService } from '../service/login-service.service';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-consulta-medicos',
  templateUrl: './consulta-medicos.component.html',
  styleUrls: ['./consulta-medicos.component.css']
})
export class ConsultaMedicosComponent implements OnInit {
  user_id: number;
  medico: any;
  consultas: Array<any> = []
  constructor(
    private userService: UserService,
    private authService: LoginServiceService,
    private consultaService: ConsultaService
    ) { }

  ngOnInit(): void {
    this.user_id = this.authService.getUser().id;
    this.getMedico(this.user_id)
  }

  public getMedico(user_id){
         this.userService.getMedico(user_id).subscribe((response)=>{
      const user= Object(response)
             this.listarConsulta(user?.medico?.id)
         })
  }

  listarConsulta(medico:number){
    this.consultaService.medicoConsulta(medico).subscribe((response)=>{
      console.log(response)
      this.consultas= response
    })
   }
}
