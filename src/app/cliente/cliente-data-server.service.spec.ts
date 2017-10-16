import { TestBed, inject } from '@angular/core/testing';

import { ClienteDataServerService } from './cliente-data-server.service';

describe('ClienteDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteDataServerService]
    });
  });

  it('should be created', inject([ClienteDataServerService], (service: ClienteDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
