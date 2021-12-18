import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMainComponent } from './About/about-main/about-main.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';

const routes: Routes = [
  
    {
      path: '',
      component: HomeMainComponent
    },
    {
      path: 'about',
      component: AboutMainComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
