import { Directive, AfterViewInit, ElementRef, DoCheck } from '@angular/core';

@Directive({ 
  selector: '[autofocus]' 
})
export class AutofocusDirective implements AfterViewInit, DoCheck {
  private lastVisible: boolean = false;
  private initialised: boolean = false;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.initialised = true;
    this.ngDoCheck();
  }

  ngDoCheck() {
    if (!this.initialised)
      return;

    const visible = !!this.el.nativeElement.offsetParent;

    if (visible && !this.lastVisible)
      setTimeout(() => { this.el.nativeElement.focus(); }, 1);

    this.lastVisible = visible;
  }
}