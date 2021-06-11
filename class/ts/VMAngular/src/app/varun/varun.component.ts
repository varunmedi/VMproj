import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-varun',
  templateUrl: './varun.component.html',
  styleUrls: ['./varun.component.css']
})
export class VarunComponent {
  name:string ='varun';
  age:number=25;
  isStudent: boolean = true;
}
