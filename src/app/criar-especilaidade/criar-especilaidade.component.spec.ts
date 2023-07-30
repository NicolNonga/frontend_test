import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEspecilaidadeComponent } from './criar-especilaidade.component';

describe('CriarEspecilaidadeComponent', () => {
  let component: CriarEspecilaidadeComponent;
  let fixture: ComponentFixture<CriarEspecilaidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEspecilaidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEspecilaidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
