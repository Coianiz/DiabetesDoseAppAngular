import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {
  @Input() valueToDisplay : number;
  Minimum : number = 0;
  Maximum : number = 20;
  Step : number = 2;
  constructor() { }

  ngOnInit(): void {
  }
}
