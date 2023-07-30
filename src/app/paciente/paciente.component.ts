import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  public pacientes : Array<any> = [];
  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.listar()
  }


  listar(){
      this.pacienteService.listarTodas().subscribe((response)=>{
             this.pacientes=  response
      })
  }
}
