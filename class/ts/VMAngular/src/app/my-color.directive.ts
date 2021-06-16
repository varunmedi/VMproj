
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class MyColorDirective {
  @HostBinding('style.fontSize') fontsize:string
  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor:string=''
  constructor(elementRef:ElementRef, renderer:Renderer2) {
   this.color ='orangered'
  //  this.bgcolor=''
   this.fontsize='13px'
  }
  @HostListener('mouseover') onMouseOver(){
    this.color ='white'
    this.bgcolor ='blue'
    this.fontsize='15px'

  }
  @HostListener('mouseleave') onMouseLaeve(){
    this.color ='white'  
    this.bgcolor ='green'
    this.fontsize='13px'
  }
}