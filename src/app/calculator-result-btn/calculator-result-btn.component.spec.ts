import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorResultBtnComponent } from './calculator-result-btn.component';

describe('CalculatorResultBtnComponent', () => {
  let component: CalculatorResultBtnComponent;
  let fixture: ComponentFixture<CalculatorResultBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorResultBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorResultBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
