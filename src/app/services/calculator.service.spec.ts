import { TestBed } from '@angular/core/testing';
 
import { CalculatorService } from './calculator.service';
 
describe('CalculatorService', () => {
  let service: CalculatorService;
  let calculator : CalculatorService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [CalculatorService]
    });
    service = TestBed.inject(CalculatorService);
    calculator = TestBed.get(CalculatorService);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  it('should add two numbers', () => {
    const result = calculator.add(2,2);
    expect(result).toBe(4);
  });
 
  it('should subtract two numbers', () => {
    const result = calculator.subtract(2,2);
    expect(result).toBe(0, "Unexpected subtraction result");
  })
 
});