import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 align = "center" font-color:red >Hello</h1>
  <h1 align= "center" > This is a Routing Test <br/> {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; color:green`]
})
export class HelloComponent  {
  @Input() name: string = ' from edward';
}
