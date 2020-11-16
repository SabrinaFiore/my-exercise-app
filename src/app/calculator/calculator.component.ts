import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class calculatorComponent {
  title = 'Calculator application';
  numberA: number;
  numberB: number;
  result: number;
  // amount: string = this.numberA + this.numberB;

  constructor() { }

  onAmount(): void {
    this.result = this.numberA + this.numberB;
  }

}
