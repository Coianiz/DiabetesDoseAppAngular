import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShortActingInsulinDetailsComponent } from './short-acting-insulin-details/short-acting-insulin-details.component';
import { LongActingInsulinDetailsComponent } from './long-acting-insulin-details/long-acting-insulin-details.component';
import { IncreaseButtonComponent } from './increase-button/increase-button.component';
import { DecreaseButtonComponent } from './decrease-button/decrease-button.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortActingInsulinDetailsComponent,
    LongActingInsulinDetailsComponent,
    IncreaseButtonComponent,
    DecreaseButtonComponent,
    NumberInputComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
