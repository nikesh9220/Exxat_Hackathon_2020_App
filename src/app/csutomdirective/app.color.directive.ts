// ElementRef, the element in DOM that will be affected by directive
// Renderer, the object that will define rendering of the Element
// e.g. BackgroudColor of the elment to be chnaged
// the ElementRef and Renderer must be injected in Directive using
// constructor injection
// the 'BrowserModule' will resolve the dependnecies
import { Directive, Input, HostListener, ElementRef, Renderer } from '@angular/core';

// <div [setColor]="<value>"></div>
@Directive({
  selector: '[setColor]' // the attribute directive will be
  // created that will be used as the property binding
})
export class ColorDirective {
  // define property mapped with the selector
  @Input('setColor') setColor: string;


  constructor(private ele: ElementRef, private renderer: Renderer) {
  }

  // business logic method
  private applyColor(color: string): void {
    // the backgroundColor style of the element will be set to color
     this.renderer.setElementStyle(this.ele.nativeElement,
      'backgroundColor', color);
  }

  // methods those will host events to activate the directive
  @HostListener('mouseenter')
  mouseenter(): void {
      this.applyColor(this.setColor || 'cyan');
  }
  @HostListener('mouseleave')
  mouseleave(): void {
    this.applyColor(null);
  }
}
