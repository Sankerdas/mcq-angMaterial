import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnswerDir]'
})
export class AnswerDirDirective {

  constructor(private ElRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('click') onclick() {
   const hostElement = this.ElRef.nativeElement;
   this.renderer.addClass(hostElement, 'ansSelected');
   this.renderer.addClass(hostElement.parentNode.parentNode , 'cardDisable');

  }

}
