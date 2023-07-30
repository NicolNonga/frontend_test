import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsultaPacientesComponent } from './create-consulta-pacientes.component';

describe('CreateConsultaPacientesComponent', () => {
  let component: CreateConsultaPacientesComponent;
  let fixture: ComponentFixture<CreateConsultaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConsultaPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConsultaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
