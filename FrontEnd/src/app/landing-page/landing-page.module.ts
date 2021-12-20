import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ashin
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './Home/testimonials/testimonials.component';
import { SinglePageComponent } from './Courses/single-page/single-page.component';
import { MainPageComponent } from './Courses/main-page/main-page.component';
import { AcademicComponent } from './Offerings/academic/academic.component';
import { CorporateComponent } from './Offerings/corporate/corporate.component';
import { PartnershipComponent } from './Offerings/partnership/partnership.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';


//sandeep
import { BannerHomeComponent } from './Home/banner-home/banner-home.component';
import { VideoComponent } from './Home/video/video.component';
import { CardsComponent } from './Home/cards/cards.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TesterComponent } from './Home/tester/tester.component';


//Jeslin
import { AboutMainComponent } from './About/about-main/about-main.component';
import { BannerComponent } from './About/banner/banner.component';
import { AbtComponent } from './About/abt/abt.component';
import { FeatureComponent } from './About/feature/feature.component';
import { LeadersComponent } from './About/leaders/leaders.component';
import { TeamComponent } from './About/team/team.component';
import { PatronsComponent } from './About/patrons/patrons.component';
import { IndustrialPartnersComponent } from './About/industrial-partners/industrial-partners.component';
import { MarketingPartnersComponent } from './About/marketing-partners/marketing-partners.component';
import { TrainersComponent } from './About/trainers/trainers.component';
import { KnowledgePartnersComponent } from './About/knowledge-partners/knowledge-partners.component';
import { VendorsComponent } from './vendors/vendors.component';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TestimonialsComponent,
    SinglePageComponent,
    MainPageComponent,
    AcademicComponent,
    CorporateComponent,
    PartnershipComponent,
    HomeMainComponent,
    AboutMainComponent,
    LandingPageComponent,
    //Sandeep
    BannerHomeComponent,
    VideoComponent,
    CardsComponent,
    TesterComponent,
    

   //Jeslin

    BannerComponent,
    AbtComponent,
    FeatureComponent,
    LeadersComponent,
    TeamComponent,
    PatronsComponent,
    IndustrialPartnersComponent,
    MarketingPartnersComponent,
    TrainersComponent,
    KnowledgePartnersComponent,
    VendorsComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SlickCarouselModule
  ]
})
export class LandingPageModule { }
