import { TestBed } from '@angular/core/testing';

import { AddSurveyService } from './add-survey.service';

describe('AddSurveyService', () => {
  let service: AddSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
