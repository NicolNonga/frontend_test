import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultaService } from '../service/consulta.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from '../service/medicos.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
    public todasConsultas : Array<any> = [];
    public medicos : Array<any> = [];
     public consulta_id : number 
     @ViewChild('closeModal') closeModal;
    simpleForm: FormGroup = new FormGroup({
      medicoId: new FormControl('', Validators.required)
    })
  constructor(private consultaService: ConsultaService, 
    private toastService: ToastrService,
     private medicoService: MedicosService
    ) { }

  ngOnInit(): void {
    this.listartodas()
    this.getAllMedicos()
  }

  listartodas(){
    this.consultaService.todas().subscribe((response)=>{
      this.todasConsultas = response
     
    })
  }

  get f(){
    return this.simpleForm.controls
  }

  submit(){
  
         if(this.simpleForm.invalid){
          this.toastService.error("selecione o medico", "falha")
          return
         }

         this.consultaService.addMedico(this.consulta_id, this.simpleForm.value).subscribe((response)=>{
          if(response){
            this.toastService.success("Medico Adicinando")
            this.closeModal.nativeElement.click();
            this.listartodas()
          }
         })
  }

  aceitar(consultaId){
        this.consultaService.aceitarConsulta(consultaId, {estado:'aceite'}).subscribe((response)=>{

           if(response){
            this.toastService.success("Actualizado com sucesso", "Sucesso")
           }
        })
  }

  rejeitar(consultaId){
    console.log(consultaId)
    this.consultaService.aceitarConsulta(consultaId, {estado:'rejeitado'}).subscribe((response)=>{

       if(response){
        this.toastService.success("Consulta Rejeitado", "Sucesso")
       }
    })
}

adicionarMedico(consultaId){
  this. consulta_id= consultaId
}

getAllMedicos(){
  this.medicoService.listarTodos().subscribe((response)=>{
    this.medicos = response
  })
}
 
}
