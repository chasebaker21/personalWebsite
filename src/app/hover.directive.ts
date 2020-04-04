import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }

  @HostListener('mouseenter', ['$event.target']) onMouseOver(a: any) {
    a.style.backgroundImage = `url('assets/${a.id}_hover_img')`
  }
 @HostListener('mouseleave', ['$event.target']) onMouseLeave(a: any) {
    a.style.backgroundImage = 'initial'
  }


}
