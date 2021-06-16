
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class MyColorDirective {
  
  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor:string=''
  constructor(elementRef:ElementRef, renderer:Renderer2) {
   this.color ='black'

  }
  @HostListener('mouseover') onMouseOver(){
    this.color ='white'
    this.bgcolor ='blue'
  

  }
  @HostListener('mouseleave') onMouseLeave(){
    this.color ='black'  
    this.bgcolor ='white'
  
  }
}