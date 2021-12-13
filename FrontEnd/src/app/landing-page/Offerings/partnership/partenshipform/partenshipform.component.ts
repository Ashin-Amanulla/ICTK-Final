import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partenshipform',
  templateUrl: './partenshipform.component.html',
  styleUrls: ['./partenshipform.component.css',
]
})
export class PartenshipformComponent implements OnInit {

  constructor() { }

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
newpartner(){
  alert("partner reg sucess")
}


  ngOnInit(): void {
  }

}
