import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyToasterComponent } from 'lib-components';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [MyToasterComponent],
  template: `<my-toaster [description]="'Hello'"/>`,
})
export class App {}

bootstrapApplication(App);
