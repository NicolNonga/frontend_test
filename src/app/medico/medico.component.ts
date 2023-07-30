import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../service/medicos.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  public medicos : Array<any> = []
  constructor(private medicoService:MedicosService) { }

  ngOnInit(): void {
    this.listarTodosMedidcos()
  }

  listarTodosMedidcos(){
      this.medicoService.listarTodos().subscribe((response)=>{
         this.medicos= response
      })
  }
}
