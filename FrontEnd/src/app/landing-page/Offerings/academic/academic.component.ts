import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rpa: number = 0;
  fsd: number = 0;
  sf: number = 0;
 
  ms:number = 0;

  rpastop: any = setInterval(() => {
    this.rpa++;    
    if (this.rpa == 89) {     
      clearInterval(this.rpastop);
    }
  }, 10)
  fsdstop: any = setInterval(() => {
    this.fsd++;    
    if (this.fsd == 232) {
      clearInterval(this.fsdstop);
    }
  }, 10)
  sfstop: any = setInterval(() => {
    this.sf++;
     if (this.sf == 253) {
       clearInterval(this.sfstop);
    }
  }, 10)

  msstop: any = setInterval(() => {
    this.ms++;
    if (this.ms == 63) {
      clearInterval(this.msstop);
    }
  }, 10)

}
