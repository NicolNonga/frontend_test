import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMedicosComponent } from './consulta-medicos.component';

describe('ConsultaMedicosComponent', () => {
  let component: ConsultaMedicosComponent;
  let fixture: ComponentFixture<ConsultaMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
