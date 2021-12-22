import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';


@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  // img = {
  //   image: '/assets/images/partner2.png',
  //   hfh:''
  //  }
  images = [
    {path: 'https://source.unsplash.com/800x600/?nature'},
    {path: 'https://source.unsplash.com/800x600/?car'},
    {path: 'https://source.unsplash.com/800x600/?moto'},
    {path: 'https://source.unsplash.com/800x600/?fantasy'},
  ]
  
  // testinomy = [
  //   {
  //     image: "/assets/images/course/testi1.png",
  //     name: "Theertha Anik K",
  //     comment:"Really happy receiving constant support and efforts from ICTAK or showing me the right opportunities and thanks for NORKA Roots for providing 75% Scholarship. Best place for DSA Course"
  //   },
  // ]
  BrochureSend = true
  
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  testinomialSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-circle-left text-white"></i>', '<i class="fas fa-chevron-circle-right text-white"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      // 940: {
      //   items: 4
      // }
    },
    nav: true
  }

}


