import { TestBed } from '@angular/core/testing';

import { BClickService } from './b-click.service';

describe('BClickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BClickService = TestBed.get(BClickService);
    expect(service).toBeTruthy();
  });
});
