import { TestBed } from '@angular/core/testing';

import { TimeHelpersService } from './time-helpers.service';

describe('TimeHelpersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeHelpersService = TestBed.get(TimeHelpersService);
    expect(service).toBeTruthy();
  });
});
