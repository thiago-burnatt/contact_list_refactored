import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { FormComponent } from './form/form.component';
import { ContactDisplayComponent } from './contact-display/contact-display.component';
import { DataService } from './services/data.service';
import { LocalStorageService } from './services/localStorage.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AppRoutingModule } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactDisplayComponent,
    ContactDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
