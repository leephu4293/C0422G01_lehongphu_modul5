import { TestBed } from '@angular/core/testing';

import { DictonaryService } from './dictonary.service';

describe('DictonaryService', () => {
  let service: DictonaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictonaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
