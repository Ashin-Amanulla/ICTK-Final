import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ashin
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StaffsComponent } from './About/staffs/staffs.component';
import { TestimonialsComponent } from './Home/testimonials/testimonials.component';
import { SinglePageComponent } from './Courses/single-page/single-page.component';
import { MainPageComponent } from './Courses/main-page/main-page.component';
import { AcademicComponent } from './Offerings/academic/academic.component';
import { CorporateComponent } from './Offerings/corporate/corporate.component';
import { PartnershipComponent } from './Offerings/partnership/partnership.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';
import {AboutMainComponent}  from './About/about-main/about-main.component';
//sandeep
import { BannerHomeComponent } from './Home/banner-home/banner-home.component';
import { VideoComponent } from './Home/video/video.component';
import { CardsComponent } from './Home/cards/cards.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TesterComponent } from './Home/tester/tester.component';
import { Footer1Component } from './Home/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StaffsComponent,
    TestimonialsComponent,
    SinglePageComponent,
    MainPageComponent,
    AcademicComponent,
    CorporateComponent,
    PartnershipComponent,
    HomeMainComponent,
    AboutMainComponent,
//Sandeep
    BannerHomeComponent,
    VideoComponent,
    CardsComponent,
    TesterComponent,
    Footer1Component
    

   

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SlickCarouselModule
  ]
})
export class LandingPageModule { }
