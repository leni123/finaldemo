import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.sass'],
})
export class DoctorDashboardComponent implements OnInit {
  isDoctor: boolean = false;

  isCollapse: boolean = false;

  checkProgress: boolean = true;
  progressWarn: boolean = false;
  progressMsg: string = 'Checking Doctor....';

  constructor(private router: Router, private doctorService: DoctorService) {

    router.navigate(['/doctor/doctor-dashboard']);
  }

  ngOnInit(): void {
    this.checkDr()
  }

  checkDr(){
    this.doctorService
      .checkIsDr()
      .then((r) => {
        console.log(r);
        if (r) {
          this.isDoctor = true;
        }
      })
      .catch((err: any) => {
        this.progressWarn = true;
        this.progressMsg = 'Only Doctors have access to this page...';
      });
  }

  // onCheckDoctor() {
  //   this.checkProgress = true;
  //   this.progressWarn = false;
  //   this.progressMsg = 'Checking Doctor....';

  //   var count = 0;

  //   let checkDr = setInterval(() => {
  //     this.doctorService.checkisDr();
  //     if (this.doctorService.checkComplete) {
  //       if (this.doctorService.isDoctor) {
  //         this.isDoctor = true;
  //       } else {
  //         this.progressWarn = true;
  //         this.progressMsg = 'Only Doctors have access to this page...';
  //       }
  //       clearInterval(checkDr);
  //     }

  //     if (count >= 50) {
  //       clearInterval(checkDr);
  //     }
  //     count++;
  //   }, 1000);
  // }
}
