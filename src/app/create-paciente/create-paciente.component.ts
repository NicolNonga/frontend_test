import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../service/paciente.service';
import { ToastrService } from 'ngx-toastr';
import { MiliatarService } from '../service/miliatar.service';
import { GrauParentescoService } from '../service/grau-parentesco.service';

@Component({
  selector: 'app-create-paciente',
  templateUrl: './create-paciente.component.html',
  styleUrls: ['./create-paciente.component.css']
})
export class CreatePacienteComponent implements OnInit {

  submitted:boolean= false;
  militars : Array<any> = []
  grauParentescos: Array<any> = []
  public tipoUtilizador: Array<any> = [
    {
      tipo: "admin",

    },
    {
      tipo: "medico",
      
    },
    {
      tipo: "paciente",
      
    }
  ]

  public especialidade: Array<any> = []
  public patenteMedico= [{
    nome:"patente 1"
  },
  {
    nome:"patente 2"
  }
]
  simpleForm:FormGroup = new FormGroup({
    name:  new FormControl('', Validators.required),
    date_birth: new FormControl('', Validators.required),
    militar_id: new FormControl('', Validators.required),
 
    sex: new FormControl('', Validators.required),
    residence: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    user_type: new FormControl(this.tipoUtilizador[2].tipo, Validators.required),
    password: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    bi: new FormControl('', Validators.required),
    grau_parentesco_id: new FormControl('',Validators.required)

  })
  constructor(private pacienteService: PacienteService, 
    private toastr: ToastrService,
    private militarService: MiliatarService,
    private grauParentesco: GrauParentescoService
    ) { }

  ngOnInit(): void {
    this.listarMilitar()
    this.listarGrauParentesco()
  }

  get f (){
    return this.simpleForm.controls
  }

  submite(){
    this.submitted= true;
    if(this.simpleForm.invalid){
      console.log(this.simpleForm.value)
      return
    }

    const payload = {
      ...this.simpleForm.value,
      username: this.f.name.value,
      password_confirmation: this.f.password.value
    }

    this.pacienteService.criar(payload).subscribe(response=>{
          if(response){
            this.toastr.success('Paciente Criado com sucesso', 'Successo');
            this.simpleForm.reset();
            this.submitted= false
          }
    })


  }

  listarMilitar(){
           this.militarService.listarTodas().subscribe(data=>{
            this.militars = data
           })
  }

  listarGrauParentesco(){
    this.grauParentesco.listarTodas().subscribe(data=>{
     this.grauParentescos = data
    })
}

}
