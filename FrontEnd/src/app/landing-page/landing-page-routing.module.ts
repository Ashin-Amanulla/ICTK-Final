import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMainComponent } from './About/about-main/about-main.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';
import { AcademicComponent } from './Offerings/academic/academic.component';
import { AcademiccollaborationsComponent } from './Offerings/academic/academiccollaborations/academiccollaborations.component';
import { CorporateComponent } from './Offerings/corporate/corporate.component';
import { CorporateformComponent } from './Offerings/corporate/corporateform/corporateform.component';
import { PartenshipformComponent } from './Offerings/partnership/partenshipform/partenshipform.component';
import { PartnershipComponent } from './Offerings/partnership/partnership.component';

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
      path: 'partenship',
      component: PartnershipComponent
    },
    {
      path: 'partenshipform',
      component: PartenshipformComponent
    },
    {
      path: 'corporate',
      component: CorporateComponent
    },
    {
      path: 'corporateform',
      component: CorporateformComponent
    },
    {
      path: 'academic',
      component: AcademicComponent
    },
    {
      path: 'academiccollaboarations',
      component: AcademiccollaborationsComponent
    }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
