import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsulinDosageDetailsModule } from '../insulin-dosage-details/insulin-dosage-details.module';



@NgModule({
  declarations: [
    InsulinDosageDetailsModule
  ],
  imports: [
    CommonModule
  ]
})
export class ShortActingInsulinDetailsModule {
  Name : string = "Short acting insulin";
 }
