import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-partenshipform',
  templateUrl: './partenshipform.component.html',
  styleUrls: ['./partenshipform.component.css',
]
})
export class PartenshipformComponent implements OnInit {
 
 
  partner = {
    name: '',
    email: '',
    phone: '',
    firm: '',
    address: '',
    district: '',
    officeSpace: '',
    report: '',
    expect: '',
    profile: '',
    employeeCount: ''
  }




  constructor(private fb: FormBuilder  ) { }

  addPartnerForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      firm: ['', Validators.required],
      address: ['', Validators.required],
      district: ['', Validators.required],
      officeSpace: ['', Validators.required],
      report: ['', Validators.required],
      expect: ['', Validators.required],
      profile: ['', Validators.required],
      employeeCount: ['', Validators.required]

    }
  )

  



  addPartner() {  
    
   
    
  }

  ngOnInit(): void {
  }

}
