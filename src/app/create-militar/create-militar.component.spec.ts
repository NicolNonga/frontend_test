import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMilitarComponent } from './create-militar.component';

describe('CreateMilitarComponent', () => {
  let component: CreateMilitarComponent;
  let fixture: ComponentFixture<CreateMilitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMilitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMilitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
