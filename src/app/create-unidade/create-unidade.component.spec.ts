import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnidadeComponent } from './create-unidade.component';

describe('CreateUnidadeComponent', () => {
  let component: CreateUnidadeComponent;
  let fixture: ComponentFixture<CreateUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
