import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  corporate = {
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

  constructor(private fb: FormBuilder ) { }

  validateCorporateForm = this.fb.group(
    {

      name: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.required],
      head: ['', Validators.required],
      nature: ['', Validators.required],
      typeof: ['', Validators.required],
      identityNo: ['', Validators.required],
      GST: ['', Validators.required],
      date: ['', Validators.required],
      nameofContact: ['', Validators.required],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
      ])],
      email: ['',  Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      TechnicalSkill: ['', Validators.required],
      employeeCount: ['', Validators.required],
      hire: ['', Validators.required],
      patents: [Validators.required],
      collaborate: [ Validators.required],
      details: ['', Validators.required]
    }
  )
  newCorporate() {
    alert("success")   
  }
  ngOnInit() {
    
  }

}
