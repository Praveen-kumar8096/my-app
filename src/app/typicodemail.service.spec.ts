import { TestBed } from '@angular/core/testing';

import { TypicodemailService } from './typicodemail.service';

describe('TypicodemailService', () => {
  let service: TypicodemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypicodemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
