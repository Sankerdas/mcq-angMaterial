import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnswerDir]'
})
export class AnswerDirDirective {

  constructor(private ElRef: ElementRef, private renderer: Renderer) { }
  @HostListener('click') onclick() {
   const hostElement = this.ElRef.nativeElement;
   this.renderer.setElementClass(hostElement, 'ansSelected', true);
   this.renderer.setElementClass(hostElement.parentNode.parentNode , 'cardDisable', true);
  }

}
