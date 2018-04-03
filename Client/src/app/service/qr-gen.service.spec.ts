import { TestBed, inject } from '@angular/core/testing';

import { QrGenService } from './qr-gen.service';

describe('QrGenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrGenService]
    });
  });

  it('should be created', inject([QrGenService], (service: QrGenService) => {
    expect(service).toBeTruthy();
  }));
});
