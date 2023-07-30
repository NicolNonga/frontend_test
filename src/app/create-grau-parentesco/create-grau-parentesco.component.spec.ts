import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGrauParentescoComponent } from './create-grau-parentesco.component';

describe('CreateGrauParentescoComponent', () => {
  let component: CreateGrauParentescoComponent;
  let fixture: ComponentFixture<CreateGrauParentescoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGrauParentescoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGrauParentescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
