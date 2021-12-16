import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academiccollaborations',
  templateUrl: './academiccollaborations.component.html',
  styleUrls: ['./academiccollaborations.component.css']
})
export class AcademiccollaborationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  regstatus : boolean =false;

  members:any=[{
    slno:1,
    membid:'ICTAK/2021/PM/001',
    name:'Ace College Of Engineering',
    webaddress:'	https://www.acetvm.com/'}
  ,
  {slno:2,
  membid:'ICTAK/2021/PM/002',
  name:'	Adi Shankara Institute of Engineering and Technology, Kalady',
  webaddress:'		https://www.adishankara.ac.in/'
}]
  
}
