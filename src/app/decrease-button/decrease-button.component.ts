import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'decrease-button',
  templateUrl: './decrease-button.component.html',
  styleUrls: ['./decrease-button.component.scss']
})
export class DecreaseButtonComponent implements OnInit {
  @Output() decreaseClick = new EventEmitter;
  constructor(
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    this.decreaseClick.emit();
  }
}
