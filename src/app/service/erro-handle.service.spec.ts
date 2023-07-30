import { TestBed } from '@angular/core/testing';

import { ErroHandleService } from './erro-handle.service';

describe('ErroHandleService', () => {
  let service: ErroHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErroHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
