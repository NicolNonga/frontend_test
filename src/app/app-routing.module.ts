import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './authGuard/auth.guard';
import { DasboardComponent } from './dasboard/dasboard.component';
import { UtilizadoreComponent } from './Utilizador/utilizador.component';
import { MedicoComponent } from './medico/medico.component';
import { EspecilaidadeComponent } from './especilaidade/especilaidade.component';
import { UnidadeComponent } from './unidade/unidade.component';
import { GrauParantescoComponent } from './grau-parantesco/grau-parantesco.component';
import { MilitarComponent } from './militar/militar.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PerfilComponent } from './service/perfil/perfil.component';
import { ConsultaPacientesComponent } from './service/consulta-pacientes/consulta-pacientes.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ConsultaMedicosComponent } from './consulta-medicos/consulta-medicos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'authenticioan/login',
    component: LoginComponent,
    data: {
      title: 'Authentication',
      layout: {
        customLayout: false,
        layoutNavigationTop: false,
      },
    },
  },
  {
    path: 'pacientes',
    component: PacienteComponent,

    data: {
      title: 'Utilizadores',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: 'consulta_paciente',
    component: ConsultaPacientesComponent,

    data: {
      title: 'pacinetes',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: 'consulta_medico',
    component: ConsultaMedicosComponent,

    data: {
      title: 'Medicos',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: 'perfil',
    component: PerfilComponent,

    data: {
      title: 'Utilizadores',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: 'medicos',
    component: MedicoComponent,
    data: {
      title: 'Medicos',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: 'todas_consulta',
    component: ConsultasComponent,
    data: {
      title: 'consultas',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: 'militar',
    component: MilitarComponent,
    data: {
      title: 'militar',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },


  {
    path: 'especialidade',
    component: EspecilaidadeComponent,
    data: {
      title: 'Especialidade',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: 'grau_parentesco',
    component: GrauParantescoComponent,
    data: {
      title: 'Especialidade',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: 'unidade',
    component: UnidadeComponent,
    data: {
      title: 'Unidade',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },

  {
    path: '',
    component: DasboardComponent,

    data: {
      title: 'Pagina Inicial',
      layout: {
        customLayout: true,
        layoutNavigationTop: false,
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
