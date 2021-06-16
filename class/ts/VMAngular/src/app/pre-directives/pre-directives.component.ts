import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-directives',
  templateUrl: './pre-directives.component.html',
  styleUrls: ['./pre-directives.component.css']
})
export class PreDirectivesComponent {

  showProduct:boolean = true;
  course:string = 'java';
  products:string[] = ['tv','mobile','chocolates']
  employees =[
    {empId:101, empName:'varun', salary:10000},
    {empId:102, empName:'rithwin', salary:20000},
    {empId:103, empName:'naveen', salary:30000}
  ]
}
