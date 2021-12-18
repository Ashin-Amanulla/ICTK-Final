import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CourseRegistrationComponent } from './landing-page/Courses/course-registration/course-registration.component';
// import { MainPageComponent } from './landing-page/Courses/main-page/main-page.component';
// import { SinglePageComponent } from './landing-page/Courses/single-page/single-page.component';

const routes: Routes = [

  {
    path: 'LandingPage',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: '',
    redirectTo: 'LandingPage',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
