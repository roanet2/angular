import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateGuardServiceGuard } from './can-deactivate-guard-service.guard';

describe('CanDeactivateGuardServiceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateGuardServiceGuard]
    });
  });

  it('should ...', inject([CanDeactivateGuardServiceGuard], (guard: CanDeactivateGuardServiceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
