import { Component } from '@angular/core';
import { Example1Component } from 'lib-components';

@Component({
  standalone: true,
  imports: [Example1Component],
  template: `
    <fieldset>
      <legend>Example5Component</legend>

      <ul>
        <li><lib-example-1 name="First"/></li>
        <li><lib-example-1 name="Second"/></li>
        <li><lib-example-1 name="Third"/></li>
      </ul>
    </fieldset>
    
  `
})
export class Example5Component {}