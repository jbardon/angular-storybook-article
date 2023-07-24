import { Component } from '@angular/core';
import { MyToasterComponent } from 'lib-components';

@Component({
  standalone: true,
  imports: [MyToasterComponent],
  template: `
    <fieldset>
      <legend>MyToasterComponent</legend>

      <my-toaster [description]="'First'"/>
      <my-toaster [description]="'Second'"/>
      <my-toaster [description]="'Third'"/>
    </fieldset>
  `
})
export class Example5Component {}