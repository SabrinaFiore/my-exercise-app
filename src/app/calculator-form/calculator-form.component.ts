import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
})

export class CalculatorFormComponent implements OnInit {
  // configuration of output element towards father cmp
  @Output() resultAdd = new EventEmitter<number>();

  numberA: number;
  numberB: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAmount(): void {
    let result = this.numberA + this.numberB;
    this.resultAdd.emit(result);
  }

}
