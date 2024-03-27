import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient-id-generator',
  templateUrl: './patient-id-generator.component.html',
  styleUrls: []
})
export class PatientIdGeneratorComponent implements OnInit {
  generatedId!: string;
  year: number;
  month: string;
  day: string;
  hours : string;
  minutes: string;
  seconds: string;
  milliseconds: string;
  patientId: number;

  constructor() { 
    this.year = new Date().getFullYear();
    this.month = String(new Date().getMonth() + 1).padStart(2, '0');
    this.day = String(new Date().getDate()).padStart(2, '0');
    this.hours = String(new Date().getHours()).padStart(2, '0');
    this.minutes = String(new Date().getMinutes()).padStart(2, '0');
    this.seconds = String(new Date().getSeconds()).padStart(2, '0');
    this.milliseconds = String(new Date().getMilliseconds()).padStart(2, '0');
      
    this.patientId = 0;
    this.generatePatientId();}
    

  ngOnInit(): void {
  }

  generatePatientId() {
    this.patientId++;
    const dateTime = `${this.year}${this.month}${this.day}${this.patientId}${this.hours}${this.minutes}${this.seconds}${this.milliseconds}`;
    this.generatedId = `MEDRECID${dateTime}`;
    
  
  }

}

