import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAppComponent } from './report-app.component';

describe('ReportAppComponent', () => {
  let component: ReportAppComponent;
  let fixture: ComponentFixture<ReportAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
