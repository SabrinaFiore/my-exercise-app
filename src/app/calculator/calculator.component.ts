import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})

export class calculatorComponent {
  title = 'Calculator application';
  numberA: number;
  numberB: number;
  result: number;

  constructor() { }

  onAmount(): void {
    this.result = this.numberA + this.numberB;
  }

}
