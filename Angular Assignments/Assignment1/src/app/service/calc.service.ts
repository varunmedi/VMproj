import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
    result:any
    addOperation(x:any,y:any){
    this.result = Number(x)+Number(y)
    return this.result
  }
    subOperation(x:any,y:any){
    this.result = x-y
    return this.result
  }
    mulOperation(x:any,y:any){
    this.result = x*y
    return this.result
  }
    divOperation(x:any,y:any){
    this.result = x/y
    return this.result
  }
} 

