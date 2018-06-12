import { TestBed, inject } from '@angular/core/testing';

import { ProductService\productService } from './product-service\product.service';

describe('ProductService\productService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService\productService]
    });
  });

  it('should be created', inject([ProductService\productService], (service: ProductService\productService) => {
    expect(service).toBeTruthy();
  }));
});
