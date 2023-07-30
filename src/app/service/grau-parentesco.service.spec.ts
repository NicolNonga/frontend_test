import { TestBed } from '@angular/core/testing';

import { GrauParentescoService } from './grau-parentesco.service';

describe('GrauParentescoService', () => {
  let service: GrauParentescoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrauParentescoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
