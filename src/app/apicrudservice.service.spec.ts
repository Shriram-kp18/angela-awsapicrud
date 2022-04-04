import { TestBed } from '@angular/core/testing';

import { ApicrudserviceService } from './apicrudservice.service';

describe('ApicrudserviceService', () => {
  let service: ApicrudserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicrudserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
