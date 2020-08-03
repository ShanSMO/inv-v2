import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'c-inv-unit-adder',
  templateUrl: './unit-adder.component.html',
  styleUrls: ['./unit-adder.component.sass']
})
export class UnitAdderComponent implements OnInit {

  @Output() value: EventEmitter<any> = new EventEmitter<any>();
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setCount(type) {
    switch (type) {
      case 'ADD': this.count ++; break;
      case 'REMOVE': this.count <= 0 ? this.count = 0 : this.count --; break;
    }
  }

  getValue() {
    return this.value.emit({});
  }

}
