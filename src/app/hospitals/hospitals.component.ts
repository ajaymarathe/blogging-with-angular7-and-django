import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  constructor() { }

  name;
  address;
  doctor;
  patient;

  hospital = [
    {
      name : 'first hospital',
      address: 'pune',
      doctor: 'vikas',
      patient: 'vimal'
    },
    {
      name :  'second hospital',
      address: 'pune',
      doctor: 'fdfdsfd',
      patient: 'vimal'
    },
    {
      name : 'third hospital',
      address: 'pune',
      doctor: 'hello',
      patient: 'vimal'
    },
    {
      name : 'fourth hospital',
      address: 'pune',
      doctor: 'dd dsdlfsdfsdfsdf',
      patient: 'vimal'
    },

  ]

  ngOnInit() {
    console.log(this.hospital);
  }

  showData(name){
    // console.log(name)
    


    var i;
    for (i = 0; i < this.hospital.length; i++) {
      if(name == this.hospital[i].name){
        console.log(this.hospital[i].name)
        const hospti_data = [this.name = this.hospital[i].name, this.address =  this.hospital[i].address, this.doctor =  this.hospital[i].doctor, this.patient=  this.hospital[i].patient];
        console.log(hospti_data);
      }
    }

  }
}
