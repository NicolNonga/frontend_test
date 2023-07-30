import { TestBed } from '@angular/core/testing';

import { EspeicalidadeService } from './espeicalidade.service';

describe('EspeicalidadeService', () => {
  let service: EspeicalidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspeicalidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
