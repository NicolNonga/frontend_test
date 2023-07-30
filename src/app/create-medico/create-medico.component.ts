import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { EspeicalidadeService } from '../espeicalidade.service';
import { MedicosService } from '../service/medicos.service';

@Component({
  selector: 'app-create-medico',
  templateUrl: './create-medico.component.html',
  styleUrls: ['./create-medico.component.css']
})
export class CreateMedicoComponent implements OnInit {
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
    especilidade_id: new FormControl('', Validators.required),
 
    sex: new FormControl('', Validators.required),
    residence: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    user_type: new FormControl(this.tipoUtilizador[1].tipo, Validators.required),
    password: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    bi: new FormControl('', Validators.required),
    funcao: new FormControl('', Validators.required)
  })
 public submitted:boolean= false
  constructor(private userService: UserService, 
    private toastr: ToastrService,
    private especialidadeService : EspeicalidadeService,
    private medicoService: MedicosService
    ) { }

  ngOnInit(): void {
    this.listarEspecialidade()
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

    this.medicoService.create(payload).subscribe(response=>{
          if(response){
            this.toastr.success('Medico Criado com sucesso', 'Successo');
            this.simpleForm.reset();
            this.submitted= false
          }
    })
  }

  private listarEspecialidade(){
         this.especialidadeService.listarTodas().subscribe((response)=>{
            this.especialidade= response
         })
  }
}
