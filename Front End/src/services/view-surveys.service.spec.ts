import { TestBed } from '@angular/core/testing';

import { ViewSurveysService } from './view-surveys.service';

describe('ViewSurveysService', () => {
  let service: ViewSurveysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSurveysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
