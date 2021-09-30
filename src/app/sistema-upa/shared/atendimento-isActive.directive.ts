import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[isActive]',
 
})
export class isActiveDirective implements OnInit {
  @Input() isActive: boolean;


  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.isActive) {
        this.el.nativeElement.style.display = "none";
    }
  }

}