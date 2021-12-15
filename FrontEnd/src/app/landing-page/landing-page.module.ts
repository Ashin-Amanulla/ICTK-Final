import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { ContactComponent } from './Home/contact/contact.component';
import { AboutMainComponent } from './About/about-main/about-main.component';
import { PartenshipformComponent } from './Offerings/partnership/partenshipform/partenshipform.component';
import { FormsModule } from '@angular/forms';
import { CorporateformComponent } from './Offerings/corporate/corporateform/corporateform.component';


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
    ContactComponent,
    AboutMainComponent,
    PartenshipformComponent,
    CorporateformComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule
  ]
})
export class LandingPageModule { }
