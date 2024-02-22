import { TestBed } from '@angular/core/testing';

import { DetailStateServiceService } from './detail-state-service.service';

describe('DetailStateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailStateServiceService = TestBed.get(DetailStateServiceService);
    expect(service).toBeTruthy();
  });
});
