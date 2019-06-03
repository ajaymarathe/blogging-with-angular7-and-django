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
  isActive = false;
  selectedItem;


  hospital = [
    {
      name : 'first hospital',
      address: 'pune',
      doctor: 'vikas',
      patient: 'vimal',
      isSelected:true
    },
    {
      name :  'second hospital',
      address: 'pune',
      doctor: 'fdfdsfd',
      patient: 'vimal',
      isSelected:false
    },
    {
      name : 'third hospital',
      address: 'pune',
      doctor: 'hello',
      patient: 'vimal',
      isSelected:false
    },
    {
      name : 'fourth hospital',
      address: 'pune',
      doctor: 'dd dsdlfsdfsdfsdf',
      patient: 'vimal',
      isSelected:false
    },

  ]

  ngOnInit() {
    this.FirstShouldbeSelected();
  }

  listClick(event, newValue) {
    this.selectedItem = newValue;  // don't forget to update the model here
}

  FirstShouldbeSelected(){
    const hospti_data = [this.name = this.hospital[0].name, this.address =  this.hospital[0].address, this.doctor =  this.hospital[0].doctor, this.patient=  this.hospital[0].patient];
  }


  showData(name){
    var i;
    for (i = 0; i < this.hospital.length; i++) {
      if(name == this.hospital[i].name){
        const hospti_data = [this.name = this.hospital[i].name, this.address =  this.hospital[i].address, this.doctor =  this.hospital[i].doctor, this.patient=  this.hospital[i].patient];
        this.hospital[i].isSelected=true;
      }else{
        this.hospital[i].isSelected=false
      }
    }
  }
}
