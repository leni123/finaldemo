import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/services/blockchain.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  model: any = {
    patID: '',
    fName: '',
    lName: '',
    phone: '',
    city: '',
    state: 'Manaoag',
    medicalID: '',
    bloodType:'',
    age:'',
  };

  show: boolean = false;
  msg_text: string = '';
  warn: boolean = false;
  success: boolean = false;

  ipfs: any;

  constructor(private blockchainService: BlockchainService, private http: HttpClient) { }

  ngOnInit(): void { }

  onSubmit() {
    this.show = true;
    this.warn = false
    this.msg_text = 'Adding Patient to the Network...';
    console.log(this.model);
    // this.checkAddProgress()
    if (this.model.patID == '' || this.model.fName == '' || this.model.lName == ''
      || this.model.phone == '' || this.model.city == '' || this.model.state == '') {
      this.msg_text = 'fill all the fields'
      this.warn = true
      return
    }
    if (this.model.patID.length != 42 || !this.model.patID.startsWith('0x')) {
      this.msg_text = 'Please add valid Id';
      this.warn = true;
      return
    }
    this.blockchainService
      .addPatient(this.model.patID, this.model)
      .then((r) => {
        console.log(r);
        this.msg_text = 'Patient Added to the network'
        this.success = true
      })
      .catch((err) => {
        console.log(err);
        this.msg_text = 'Failed to add pateint to network'
        this.warn = true
      });
  }

  onClose() {
    this.show = false;
    this.warn = false;
  }
}
