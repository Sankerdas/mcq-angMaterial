import { TestBed } from '@angular/core/testing';

import { QnsService } from './qns.service';

describe('QnsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QnsService = TestBed.get(QnsService);
    expect(service).toBeTruthy();
  });
});
