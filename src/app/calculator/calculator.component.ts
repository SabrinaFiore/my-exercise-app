import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})

export class CalculatorComponent implements OnInit {
  title = '02. Calculator application';
  FatherResult: number;

  onResult(result: number): void {
    this.FatherResult = result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
