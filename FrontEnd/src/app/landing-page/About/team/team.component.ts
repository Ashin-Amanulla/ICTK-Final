import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title = 'Ngx-Slick-Carousel-In-Angular-Material-Card-with-Custom-Arrows';
  slides = [
    {img: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {img: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {img: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {img: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
   
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
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor() { }

  ngOnInit(): void {
  }


}
