import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'increase-button',
  templateUrl: './increase-button.component.html',
  styleUrls: ['./increase-button.component.scss']
})
export class IncreaseButtonComponent implements OnInit {
  @Output() increaseClick = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    this.increaseClick.emit();
  }
}
