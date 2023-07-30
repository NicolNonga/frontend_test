import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MiliatarService } from '../service/miliatar.service';
import { ToastrService } from 'ngx-toastr';
import { UnidadeService } from '../service/unidade.service';

@Component({
  selector: 'app-create-militar',
  templateUrl: './create-militar.component.html',
  styleUrls: ['./create-militar.component.css']
})
export class CreateMilitarComponent implements OnInit {
  submitted: boolean = false

  public tipoUtilizador: Array<any> = [
    {
      tipo: "admin",

    },
    {
      tipo: "medico",
      
    },
    {
      tipo: "paciente",
      
    },
    {
      tipo: "militar",
      
    }
  ]

  public unidades: Array<any> = []
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
    unidade_id: new FormControl('', Validators.required),
    militar_nip: new FormControl('', Validators.required),
    patente: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    residence: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    user_type: new FormControl(this.tipoUtilizador[3].tipo, Validators.required),
    password: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    bi: new FormControl('', Validators.required),

  })
  
  constructor(private militarService: MiliatarService, 
    private toastr: ToastrService,
    private unidadeService: UnidadeService
    ) { }

  ngOnInit(): void {
    this.lisarUnidade()
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

    this.militarService.create(payload).subscribe(response=>{
          if(response){
            this.toastr.success('Militar Criado com sucesso', 'Successo');
            this.simpleForm.reset();
            this.submitted= false
          }
    })
  }

  private lisarUnidade(){
    this.unidadeService.listarTodas().subscribe((response)=>{
       this.unidades= response
    })
}
}
