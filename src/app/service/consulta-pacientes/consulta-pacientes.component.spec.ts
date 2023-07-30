import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPacientesComponent } from './consulta-pacientes.component';

describe('ConsultaPacientesComponent', () => {
  let component: ConsultaPacientesComponent;
  let fixture: ComponentFixture<ConsultaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
