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

  fdp: number = 0;
  fsd: number = 0;
  sf: number = 0; 
  ms:number = 0;
  vi:number = 0;
  op:number = 0;

  fdpstop: any = setInterval(() => {
    this.fdp++;    
    if (this.fdp == 647) {     
      clearInterval(this.fdpstop);
    }
  }, 10)
  fsdstop: any = setInterval(() => {
    this.fsd++;    
    if (this.fsd == 310) {
      clearInterval(this.fsdstop);
    }
  }, 10)
  sfstop: any = setInterval(() => {
    this.sf++;
     if (this.sf == 562) {
       clearInterval(this.sfstop);
    }
  }, 10)

  msstop: any = setInterval(() => {
    this.ms++;
    if (this.ms == 346) {
      clearInterval(this.msstop);
    }
  }, 10)

  vistop: any = setInterval(() => {
    this.vi++;
    if (this.vi == 143) {
      clearInterval(this.vistop);
    }
  }, 10)

  opstop: any = setInterval(() => {
    this.op++;
    if (this.op == 431) {
      clearInterval(this.opstop);
    }
  }, 10)

}
