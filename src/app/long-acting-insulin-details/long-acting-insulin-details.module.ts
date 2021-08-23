import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaseButtonComponent } from '../increase-button/increase-button.component';
import { DecreaseButtonComponent } from '../decrease-button/decrease-button.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { InsulinDosageDetailsModule } from '../insulin-dosage-details/insulin-dosage-details.module';



@NgModule({
  declarations: [
    InsulinDosageDetailsModule
  ],
  imports: [
    CommonModule
  ]
})
export class LongActingInsulinDetailsModule {
  Name : string = "Long lasting insulin";
 }
