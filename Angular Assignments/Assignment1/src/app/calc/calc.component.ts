import { Component, OnInit } from '@angular/core';
import { CalcService } from '../service/calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  result:any
  num1 :any =''
  num2 :any =''
  constructor(private calc:CalcService){
  }
   
  addOperation(){
    this.result = this.calc.addOperation(this.num1,this.num2)
    return this.result
  }
  subOperation(){
    this.result = this.calc.subOperation(this.num1,this.num2)
    return this.result
  }
  mulOperation(){
    this.result = this.calc.mulOperation(this.num1,this.num2)
    return this.result
  }
  divOperation(){
    this.result = this.calc.divOperation(this.num1,this.num2)
    return this.result
  }
}
