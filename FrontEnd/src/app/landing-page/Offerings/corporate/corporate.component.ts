import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rpa: number = 0;
  fsd: number = 0;
  dts: number = 0;
  dm: number = 0;

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
  dtsstop: any = setInterval(() => {
    this.dts++;
     if (this.dts == 253) {
       clearInterval(this.dtsstop);
    }
  }, 10)

  dmstop: any = setInterval(() => {
    this.dm++;
    if (this.dm == 63) {
      clearInterval(this.dmstop);
    }
  }, 10)

}
