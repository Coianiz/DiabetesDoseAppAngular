import { Component, OnInit } from '@angular/core';
import { InsulinDetails, InsulinType } from '../insulin-details.model';
import { User } from '../user.model';

@Component({
  selector: 'app-short-acting-insulin-details',
  templateUrl: './short-acting-insulin-details.component.html',
  styleUrls: ['./short-acting-insulin-details.component.scss']
})
export class ShortActingInsulinDetailsComponent implements OnInit {
  Name : string = "Short acting insulin";
  insulinDetails : InsulinDetails = new InsulinDetails(InsulinType.ShortActing, new Date(), 0);
  currentDose : number = this.insulinDetails.GetLastDose(InsulinType.ShortActing, new User());

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
