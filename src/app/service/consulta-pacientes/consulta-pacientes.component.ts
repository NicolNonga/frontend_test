import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-consulta-pacientes',
  templateUrl: './consulta-pacientes.component.html',
  styleUrls: ['./consulta-pacientes.component.css']
})
export class ConsultaPacientesComponent implements OnInit {

  constructor(private authService: LoginServiceService, private userService: UserService,  private consultaService: ConsultaService) { }
         user_id: number;
         paciente: any;
         consultas: Array<any> = []

  ngOnInit(): void {
     this.user_id = this.authService.getUser().id;
     this.getPaciente(this.user_id)

  }

  
   public getPaciente(user_id){
    this.userService.getPaciente(user_id).subscribe((response)=>{
            this.paciente  =  Object(response).paceinte
            this.listarConsulta(this.paciente?.id)
         
    })
   }

   listarConsulta(paciente_id:number){
    this.consultaService.minhasConsulta(paciente_id).subscribe((response)=>{
      console.log(response)
      this.consultas= response
    })
   }
}
