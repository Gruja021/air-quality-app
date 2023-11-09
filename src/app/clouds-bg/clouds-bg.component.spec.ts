import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudsBgComponent } from './clouds-bg.component';

describe('CloudsBgComponent', () => {
  let component: CloudsBgComponent;
  let fixture: ComponentFixture<CloudsBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudsBgComponent]
    });
    fixture = TestBed.createComponent(CloudsBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
