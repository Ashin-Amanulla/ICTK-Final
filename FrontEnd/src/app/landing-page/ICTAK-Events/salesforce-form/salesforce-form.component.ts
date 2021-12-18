import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-salesforce-form',
  templateUrl: './salesforce-form.component.html',
  styleUrls: ['./salesforce-form.component.css']
})
export class SalesforceFormComponent implements OnInit {

  exform: FormGroup;


  ngOnInit(): void {
    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'Address' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'dob' : new FormControl(null, Validators.required),
      'gender':new FormControl(null, Validators.required)
    });
    }
  
    clicksub() {
      console.log(this.exform.value);
      this.exform.reset();
    }
    get name() {
      return this.exform.get('name');
    }
    get email() {
      return this.exform.get('email');
    }
    get phone() {
      return this.exform.get('phone');
    }
    get Address() {
      return this.exform.get('Address');
    }
    get dob() {
      return this.exform.get('dob');
    }
    get gender() {
      return this.exform.get('gender');
    }

}
