import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operator: string;
  numberOne:number;
  numberTwo:number;
  output:number

  onNumberOneChange(value){
    this.numberOne=Number(value);
  }
  onNumberTwoChange(value){
    this.numberTwo=Number(value);
  }
  onSelectChange(value){
    this.operator=value;
  }
  constructor() { }
  ngOnInit(): void {
  }
  changeNumber(){
    switch (this.operator) {
      case '+':this.output=this.numberOne+this.numberTwo;
        break;
      case  '-':this.output=this.numberOne-this.numberTwo;
        break;
      case "*": this.output=this.numberOne*this.numberTwo;
        break;
      case '/': this.output=this.numberOne/this.numberTwo;
        break;
      default:
    }
  }
}
