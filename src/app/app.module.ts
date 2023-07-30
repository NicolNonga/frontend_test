import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {  HttpClientModule} from '@angular/common/http'
import { Ng2IziToastModule } from 'ng2-izitoast';

import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { UtilizadoreComponent } from './Utilizador/utilizador.component';
import { CreateMedicoComponent } from './create-medico/create-medico.component';
import { MatRadioModule } from '@angular/material/radio';
import { MedicoComponent } from './medico/medico.component';
import { EspecilaidadeComponent } from './especilaidade/especilaidade.component';
import { CriarEspecilaidadeComponent } from './criar-especilaidade/criar-especilaidade.component';
import { UnidadeComponent } from './unidade/unidade.component';
import { CreateUnidadeComponent } from './create-unidade/create-unidade.component';
import { GrauParantescoComponent } from './grau-parantesco/grau-parantesco.component';
import { CreateGrauParentescoComponent } from './create-grau-parentesco/create-grau-parentesco.component';
import { MilitarComponent } from './militar/militar.component';
import { CreateMilitarComponent } from './create-militar/create-militar.component';
import { PacienteComponent } from './paciente/paciente.component';
import { CreatePacienteComponent } from './create-paciente/create-paciente.component';
import { PerfilComponent } from './service/perfil/perfil.component';
import { ConsultaPacientesComponent } from './service/consulta-pacientes/consulta-pacientes.component';
import { CreateConsultaPacientesComponent } from './create-consulta-pacientes/create-consulta-pacientes.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ConsultaMedicosComponent } from './consulta-medicos/consulta-medicos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DasboardComponent,
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    UtilizadoreComponent,
    CreateMedicoComponent,
    MedicoComponent,
    EspecilaidadeComponent,
    CriarEspecilaidadeComponent,
    UnidadeComponent,
    CreateUnidadeComponent,
    GrauParantescoComponent,
    CreateGrauParentescoComponent,
    MilitarComponent,
    CreateMilitarComponent,
    PacienteComponent,
    CreatePacienteComponent,
    PerfilComponent,
    ConsultaPacientesComponent,
    CreateConsultaPacientesComponent,
    ConsultasComponent,
    ConsultaMedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2IziToastModule,
    HttpClientModule  ,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
