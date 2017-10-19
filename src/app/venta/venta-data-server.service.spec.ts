import { TestBed, inject } from '@angular/core/testing';

import { VentaDataServerService } from './venta-data-server.service';

describe('VentaDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VentaDataServerService]
    });
  });

  it('should be created', inject([VentaDataServerService], (service: VentaDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
