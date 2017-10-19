import { TestBed, inject } from '@angular/core/testing';

import { ProductoDataServerService } from './producto-data-server.service';

describe('ProductoDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoDataServerService]
    });
  });

  it('should be created', inject([ProductoDataServerService], (service: ProductoDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
