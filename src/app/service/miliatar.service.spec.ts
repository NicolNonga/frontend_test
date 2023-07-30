import { TestBed } from '@angular/core/testing';

import { MiliatarService } from './miliatar.service';

describe('MiliatarService', () => {
  let service: MiliatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiliatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
