import { TestBed } from '@angular/core/testing';

import { SaveResponseService } from './save-response.service';

describe('SaveResponseService', () => {
  let service: SaveResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
