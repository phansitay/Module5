import { TestBed } from '@angular/core/testing';

import { CustomerServicceService } from './customer-servicce.service';

describe('CustomerServicceService', () => {
  let service: CustomerServicceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerServicceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
