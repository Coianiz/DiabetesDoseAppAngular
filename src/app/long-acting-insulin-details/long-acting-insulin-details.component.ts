import { Component, OnInit } from '@angular/core';
import { InsulinDetails, InsulinType } from '../insulin-details.model';
import { User } from '../user.model';

@Component({
  selector: 'app-long-acting-insulin-details',
  templateUrl: './long-acting-insulin-details.component.html',
  styleUrls: ['./long-acting-insulin-details.component.scss']
})
export class LongActingInsulinDetailsComponent implements OnInit {
  Name : string = "Long lasting insulin";
  insulinDetails : InsulinDetails = new InsulinDetails(InsulinType.LongActing, new Date(), 0);
  currentDose : number = this.insulinDetails.GetLastDose(InsulinType.LongActing, new User);

  constructor() { }

  ngOnInit(): void {
  }

  onIncreaseClick(){
    ++this.currentDose;
  }

  onDecreaseClick(){
    --this.currentDose;
  }
}
