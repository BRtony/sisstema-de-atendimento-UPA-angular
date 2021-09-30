import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[concluido]',
 
})
export class concluidoDirective implements OnInit {
  @Input() concluido: boolean;


  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.concluido) {
        this.el.nativeElement.style.color = "green";
    }
  }

}