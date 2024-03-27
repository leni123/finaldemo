import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientIdGeneratorComponent } from './patient-id-generator.component';

describe('PatientIdGeneratorComponent', () => {
  let component: PatientIdGeneratorComponent;
  let fixture: ComponentFixture<PatientIdGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientIdGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientIdGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
