import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitsOfPollutantComponent } from './limits-of-pollutant.component';

describe('LimitsOfPollutantComponent', () => {
  let component: LimitsOfPollutantComponent;
  let fixture: ComponentFixture<LimitsOfPollutantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitsOfPollutantComponent]
    });
    fixture = TestBed.createComponent(LimitsOfPollutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
