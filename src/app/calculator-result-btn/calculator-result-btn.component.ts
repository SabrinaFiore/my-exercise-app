import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-result-btn',
  templateUrl: './calculator-result-btn.component.html',
})

export class CalculatorResultBtnComponent implements OnInit {
  @Input() result: number;

  constructor() { }

  ngOnInit(): void {
  }

}
