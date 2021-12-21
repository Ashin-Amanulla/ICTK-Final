import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMainComponent } from './About/about-main/about-main.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';
import {EventsMainComponent} from './ICTAK-Events/events-main/events-main.component';
import {RpaComponent} from './ICTAK-Events/rpa/rpa.component';
import { MlAiComponent } from './ICTAK-Events/ml-ai/ml-ai.component';
import {DigiWorkshopComponent} from './ICTAK-Events/digi-workshop/digi-workshop.component';
import {SalesforceComponent} from './ICTAK-Events/salesforce/salesforce.component';
import {DcwFormComponent} from './ICTAK-Events/dcw-form/dcw-form.component';
import{MlaiFormComponent} from './ICTAK-Events/mlai-form/mlai-form.component';
import{RpaFormComponent} from './ICTAK-Events/rpa-form/rpa-form.component';
import{SalesforceFormComponent} from './ICTAK-Events/salesforce-form/salesforce-form.component';


const routes: Routes = [
  
    {
      path: '',
      component: HomeMainComponent
    },
    {
      path: 'about',
      component: AboutMainComponent
    },
    {
      path: 'events',
      component: EventsMainComponent
    },
    {
      path:  'rpa',
      component:  RpaComponent
     },
    {
      path:  'ml-ai',
      component:  MlAiComponent
    },
    {
      path:  'dcw',
      component:  DigiWorkshopComponent
    },
    {
      path:  'sfdc',
     component:  SalesforceComponent
    },
    {
      path:'dcw-registration',
      component:DcwFormComponent
    },
    {
      path:'mlai-registration',
      component:MlaiFormComponent
    },
    {
      path: 'rpa-registration',
      component: RpaFormComponent
    },
    {
      path: 'sfdc-registration',
      component: SalesforceFormComponent
    }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
