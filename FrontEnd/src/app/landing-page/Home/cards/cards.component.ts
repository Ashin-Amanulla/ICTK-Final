import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})


export class CardsComponent implements OnInit {
  title = 'Ngx-Slick-Carousel-In-Angular-Material-Card-with-Custom-Arrows';
  slides = [
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsBaWXfjMkFJmwsdQjWU85NXyxSnhKM3zshP2hEOwkj2OokWEChr7sgxUFdhYwBts2Do&usqp=CAU"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lDsaCSUg-va4Zcj13dvkb1B97sGBnbzpY0cH0OmRHVuOWhCGxcl-4Me7ktxJPh9llLU&usqp=CAU"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMue0LyVNam2Bc17AAwK_7bzx21Qg8z38Bb6-fVvC92qoS1rkIKyjEjU_znH2_aHJpm_0&usqp=CAU"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigxlfhD-AnAZpFouv5E9Y35GH2Qa-IC8_P7dxbN3ANXZWy9kGtpPLH-I98gNqanrP978&usqp=CAU"},
   
  ];
  slideConfig = {slidesToShow: 1,
    infinite: true,
    variableWidth: true,
    outerEdgeLimit: true,
    nextArrow: '<div style=\'position: absolute; top: 35%; right: 5px; cursor: pointer;\' class=\'next-slide\'><i class="fa fa-angle-double-right"></i></div>',
    prevArrow: '<div style=\'position: absolute; top: 35%; left: 5px; z-index: 1; cursor: pointer;\' class=\'next-slide\'><i class="fa fa-angle-double-left"></i></div>',};
  
  addSlide() {
    this.slides.push({img: "https://material.angular.io/assets/img/examples/shiba2.jpg"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
