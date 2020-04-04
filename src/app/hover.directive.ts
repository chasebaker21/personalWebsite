import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }
  

  // adds the image background to each project on hover
  @HostListener('mouseenter', ['$event.target']) onMouseOver(a: any) {
    a.style.backgroundImage = `url('assets/${a.id}.png')`
  }
 @HostListener('mouseleave', ['$event.target']) onMouseLeave(a: any) {
    a.style.backgroundImage = 'initial'
  }


}
