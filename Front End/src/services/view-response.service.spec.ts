import { TestBed } from '@angular/core/testing';

import { ViewResponseService } from './view-response.service';

describe('ViewResponseService', () => {
  let service: ViewResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
