import { TestBed } from '@angular/core/testing';

import { ChoosenChocolateService } from './choosen-chocolate.service';

describe('ChoosenChocolateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChoosenChocolateService = TestBed.get(ChoosenChocolateService);
    expect(service).toBeTruthy();
  });
});
