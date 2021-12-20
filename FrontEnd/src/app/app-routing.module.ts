import { NgModule } from '@angular/core';
import { ExtraOptions,RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SiteUnderConstructionComponent } from './site-under-construction/site-under-construction.component';

const routes: Routes = [

  {
    path: 'LandingPage',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: '', redirectTo: 'LandingPage', pathMatch: 'full'
  },
  {
    path: '**', component: SiteUnderConstructionComponent
  },


];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
