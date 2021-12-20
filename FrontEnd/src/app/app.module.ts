import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteUnderConstructionComponent } from './site-under-construction/site-under-construction.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteUnderConstructionComponent,
  
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
