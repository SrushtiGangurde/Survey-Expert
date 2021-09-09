import { TestBed } from '@angular/core/testing';

import { ViewUserSurveysService } from './view-user-surveys.service';

describe('ViewUserSurveysService', () => {
  let service: ViewUserSurveysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewUserSurveysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
