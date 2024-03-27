import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-report-app',
  templateUrl: './report-app.component.html',
  styleUrls: ['./report-app.component.sass']
})
export class ReportAppComponent implements OnInit {

  
  public chart: any;
  docCount: number = 0;
  patCount: number = 0;
  

  
  constructor(private http: HttpClient) { }

  Appointments:any = []
  
  ngOnInit(): void {
    this.fetchData();
    this.http.get('http://localhost:8000/api/appointment/').subscribe((data:any)=>{
      let DATA = JSON.stringify(data.data)
      this.Appointments = JSON.parse(DATA)
  })
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
      type: 'bar',
      data: {
        labels: ['Registered Patients','Doctor'],
        datasets: [{
          
          label: '# of registered users',  
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

  
  
 
