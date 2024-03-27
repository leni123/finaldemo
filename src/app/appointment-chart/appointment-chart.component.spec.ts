import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentChartComponent } from './appointment-chart.component';

describe('AppointmentChartComponent', () => {
  let component: AppointmentChartComponent;
  let fixture: ComponentFixture<AppointmentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
