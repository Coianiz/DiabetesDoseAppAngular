import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShortActingInsulinDetailsModule } from './short-acting-insulin-details/short-acting-insulin-details.module';
import { LongActingInsulinDetailsModule } from './long-acting-insulin-details/long-acting-insulin-details.module';
import { InsulinDosageDetailsModule } from './insulin-dosage-details/insulin-dosage-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InsulinDosageDetailsModule,
    ShortActingInsulinDetailsModule,
    LongActingInsulinDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
