import { TestBed } from '@angular/core/testing';

import { ProductServicerService } from './product-servicer.service';

describe('ProductServicerService', () => {
  let service: ProductServicerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServicerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
