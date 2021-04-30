import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirtsFormularyComponent } from './firts-formulary/firts-formulary.component';
import {FormsModule} from "@angular/forms"
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    FirtsFormularyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
