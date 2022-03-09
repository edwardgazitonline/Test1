import {Component ,Input } from '@angular/core';

@Component({
  selector: 'edward',
  template: `<h1>Hello Edwards Project + edwards component + !</h1>`,
  styles: [`h1 { font-family:Aharoni  align:center }`]
})
export class EdwardComponent{
  @Input() name: string;
}




