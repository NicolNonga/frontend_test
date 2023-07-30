import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecilaidadeComponent } from './especilaidade.component';

describe('EspecilaidadeComponent', () => {
  let component: EspecilaidadeComponent;
  let fixture: ComponentFixture<EspecilaidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecilaidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecilaidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
