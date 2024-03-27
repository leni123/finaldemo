import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-patientchart',
  templateUrl: './patientchart.component.html',
  styleUrls: ['./patientchart.component.sass']
})
export class PatientchartComponent implements OnInit {

  public chart: any;
  docCount: number = 0;
  patCount: number = 0;
  

  
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any>('http://localhost:8000/api/getCount/').subscribe(
      (data: any) => {
        // Assuming your API response contains docCount and patCount
        this.docCount = data.docCount;
        this.patCount = data.patCount;
        
        this.createChart();
      },
      (error: any) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

 createChart() {
    const ctx = document.getElementById('pchart');
    var pchart= new Chart("pchart", {
      type: 'pie',
      data: {
        labels: ['Registered Patients','Onsite Doctor'],
        datasets: [{
             
          data: [ this.patCount,this.docCount],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // Red
            'rgba(54, 162, 235, 0.2)' // Blue
            
            ],
          borderColor: [
            'rgba(255, 99, 132, 1)', // Red
            'rgba(54, 162, 235, 1)'// Blue
           
          ],
          borderWidth: 1
        }
                 
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
 
}


  

  