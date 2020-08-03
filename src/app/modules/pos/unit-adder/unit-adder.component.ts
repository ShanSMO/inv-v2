import {Component, EventEmitter, forwardRef, Input, OnInit, Optional, Output} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'c-inv-unit-adder',
  templateUrl: './unit-adder.component.html',
  styleUrls: ['./unit-adder.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UnitAdderComponent),
    multi: true
    }
  ]
})
export class UnitAdderComponent implements OnInit, ControlValueAccessor  {

  @Input() count = 0;

  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit(): void {}

  setCount(type) {
    switch (type) {
      case 'ADD': {
        this.count++;
        this.propagateChange(this.count);
        break;
      }
      case 'REMOVE': {
        this.count <= 0 ? this.count = 0 : this.count --;
        this.propagateChange(this.count);
        break;
      }
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  writeValue(value: any): void {
    this.count = value;
  }

}
