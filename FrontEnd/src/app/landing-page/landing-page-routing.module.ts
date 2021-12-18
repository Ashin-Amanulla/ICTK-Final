import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMainComponent } from './About/about-main/about-main.component';
import { CourseRegistrationComponent } from './Courses/course-registration/course-registration.component';
import { MainPageComponent } from './Courses/main-page/main-page.component';
import { SinglePageComponent } from './Courses/single-page/single-page.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';

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
    path: "courses",
    component:MainPageComponent
  },
  {
    path: 'registration',
    component:CourseRegistrationComponent
  },
  {
    path: 'single-course',
    component:SinglePageComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
