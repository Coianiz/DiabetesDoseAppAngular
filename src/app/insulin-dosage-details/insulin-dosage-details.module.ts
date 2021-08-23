import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from '../number-input/number-input.component';
import { IncreaseButtonComponent } from '../increase-button/increase-button.component';
import { DecreaseButtonComponent } from '../decrease-button/decrease-button.component';
import {InsulinDetails} from '../insulin-details.model';

@NgModule({
  declarations: [
    NumberInputComponent,
    IncreaseButtonComponent,
    DecreaseButtonComponent
  ],
  imports: [
    CommonModule,
    InsulinDetails
  ]
})
export class InsulinDosageDetailsModule { 

}
