import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporateform',
  templateUrl: './corporateform.component.html',
  styleUrls: ['./corporateform.component.css']
})
export class CorporateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  partnerform:any = {
    name: '',
    email: '',
    contact: '',
    firm: '',
    address: '',
    district: '',
    Space: '',
    report: '',
    expect: '',
    profile: '',
    count: ''
  }

  newcorporate(){

  }

}
