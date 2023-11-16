import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqiItemComponent } from './aqi-item.component';

describe('AqiItemComponent', () => {
  let component: AqiItemComponent;
  let fixture: ComponentFixture<AqiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AqiItemComponent]
    });
    fixture = TestBed.createComponent(AqiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
