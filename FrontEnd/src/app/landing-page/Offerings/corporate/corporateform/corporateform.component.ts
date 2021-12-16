import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporateform',
  templateUrl: './corporateform.component.html',
  styleUrls: ['./corporateform.component.css']
})
export class CorporateformComponent implements OnInit {

  

  categories = [
    'Providing experts for skill sessions',
     'Fresher hiring',
    'Internships',
    'Employee training in technologysoft skills',
    'Capstone Projects assistance',
  ];
    



  pvts = ['Public', 'Private', 'Quasi-Govt', 'PPP', 'Proprietorship']
  hires = ['1-10', '11-20', '21-30','31-40', '41-50']
  patents = ['1-10', "10>",'NA']


  ngOnInit(): void {
  }
  corporform:any =  {

    name: '',
    address: '',
    website: '',
    head: '',
    nature: '',
    typeof: '',
    identityNo: '',
    GST: '',
    date: '',
    nameofContact: '',
    phone: '',
    email: '',
    TechnicalSkill: '',
    employeeCount: '',
    hire: '',
    patents: '',
    collaborate: '',
    details: ''

  }
  constructor() { }

  newcorporate(){

  }

}
