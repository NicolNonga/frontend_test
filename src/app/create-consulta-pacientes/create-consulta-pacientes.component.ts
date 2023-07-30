import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { UserService } from '../service/user.service';
import { ConsultaService } from '../service/consulta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-consulta-pacientes',
  templateUrl: './create-consulta-pacientes.component.html',
  styleUrls: ['./create-consulta-pacientes.component.css'],
})
export class CreateConsultaPacientesComponent implements OnInit {
  constructor(
    private authService: LoginServiceService,
    private userService: UserService,
    private consultaService: ConsultaService,
    private toastr: ToastrService
  ) {}
  user_id: number;
  paciente: any;
  simpleForm: FormGroup;
  submitted: boolean = false;
  ngOnInit(): void {
    this.user_id = this.authService.getUser().id;
    this.getPaciente(this.user_id);
    this.simpleForm = new FormGroup({
      paciente_id: new FormControl(''),
      data_consulta: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      observacao: new FormControl('', Validators.required),
    });
  }
  get f() {
    return this.simpleForm.controls;
  }

  public getPaciente(user_id) {
    this.userService.getPaciente(user_id).subscribe((response) => {
      this.paciente = Object(response).paceinte;
      this.simpleForm.patchValue({ paciente_id: this.paciente?.id });
     
    });
  }

  submite() {
    this.submitted = true;
    if (this.simpleForm.invalid) {
      console.log(this.simpleForm.value);
      return;
    }

    const payload = {
      ...this.simpleForm.value,
    };

    this.consultaService.create(payload).subscribe((response) => {
      if (response) {
        this.toastr.success('Consulta  Criado com sucesso', 'Successo');
        this.simpleForm.reset();
        this.submitted = false;
      }
    });
  }
}
