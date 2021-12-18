import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  partners=[
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
"https://thycotic.com/wp-content/uploads/2020/09/automation_anywhere.png",
"https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-20.png",
"https://images.ctfassets.net/5965pury2lcm/1OVj4PfkzVc4Vrm3IuDdAP/f415d995e5a286ddb2644cabafeb9578/UiPath-og-image-orange.png",
"https://www.freepnglogos.com/uploads/vmware-png-logo/partners-login-vmware-png-logo-10.png",
"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png",
"https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
  ]
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
