import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteUnderConstructionComponent } from '../site-under-construction/site-under-construction.component';
import { AboutMainComponent } from './About/about-main/about-main.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: HomeMainComponent,
      },
      {
        path: 'about',
        component: AboutMainComponent,

      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: SiteUnderConstructionComponent,
      },
    ],
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
