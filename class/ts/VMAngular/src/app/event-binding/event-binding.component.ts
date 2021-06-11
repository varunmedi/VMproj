import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  result:any
  addOperation(x:any,y:any){
    this.result = Number(x)+Number(y)
  }
  subOperation(x:any,y:any){
    this.result = x-y
  }
  mulOperation(x:any,y:any){
    this.result = x*y
  }
  divOperation(x:any,y:any){
    this.result = x/y
  }
}
