import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ciError]'
})
export class ErrorDirective {
   
  constructor(private el:ElementRef,
    private rendere:Renderer2) {
       console.log(el);
       el.nativeElement.style.color="red"
     };
      

    }  
    


