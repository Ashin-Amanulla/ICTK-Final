import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { EventsMainComponent } from './ICTAK-Events/events-main/events-main.component';
import { DigiWorkshopComponent } from './ICTAK-Events/digi-workshop/digi-workshop.component';
import { RpaComponent } from './ICTAK-Events/rpa/rpa.component';
import { MlAiComponent } from './ICTAK-Events/ml-ai/ml-ai.component';
import { SalesforceComponent } from './ICTAK-Events/salesforce/salesforce.component';
import { DcwFormComponent } from './ICTAK-Events/dcw-form/dcw-form.component';
import { EventsCarouselComponent } from './ICTAK-Events/events-carousel/events-carousel.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

import{ReactiveFormsModule } from '@angular/forms';


import {MatExpansionModule} from '@angular/material/expansion';
import { RpaFormComponent } from './ICTAK-Events/rpa-form/rpa-form.component';
import { MlaiFormComponent } from './ICTAK-Events/mlai-form/mlai-form.component';
import { SalesforceFormComponent } from './ICTAK-Events/salesforce-form/salesforce-form.component';



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
    EventsMainComponent,
    DigiWorkshopComponent,
    RpaComponent,
    MlAiComponent,
    SalesforceComponent,
    DcwFormComponent,
    RpaFormComponent,
    MlaiFormComponent,
    SalesforceFormComponent,
    EventsCarouselComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatExpansionModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
})
export class LandingPageModule { }
