import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrauParantescoComponent } from './grau-parantesco.component';

describe('GrauParantescoComponent', () => {
  let component: GrauParantescoComponent;
  let fixture: ComponentFixture<GrauParantescoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrauParantescoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrauParantescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
