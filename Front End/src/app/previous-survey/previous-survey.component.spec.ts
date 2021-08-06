import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSurveyComponent } from './previous-survey.component';

describe('PreviousSurveyComponent', () => {
  let component: PreviousSurveyComponent;
  let fixture: ComponentFixture<PreviousSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
