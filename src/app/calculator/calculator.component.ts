import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})

export class CalculatorComponent implements OnInit {
  title = 'Calculator application';
  FatherResult: number;

  onResult(result: number) {
    this.FatherResult = result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
