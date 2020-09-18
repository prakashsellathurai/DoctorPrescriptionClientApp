import { TestBed, inject } from '@angular/core/testing';

import { MyprescriptionService } from './myprescription.service';

describe('MyprescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyprescriptionService]
    });
  });

  it('should be created', inject([MyprescriptionService], (service: MyprescriptionService) => {
    expect(service).toBeTruthy();
  }));
});
