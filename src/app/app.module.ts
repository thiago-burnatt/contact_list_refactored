import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormComponent } from './form/form.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { DataService } from './services/data.service';
import { FormService } from './services/form.service';
import { LocalStorageService } from './services/localStorage.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactDisplayComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, FormService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
