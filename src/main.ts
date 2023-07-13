import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Example1Component } from 'lib-components';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [Example1Component],
  template: 'Hello World <lib-example-1/>',
})
export class App {}

bootstrapApplication(App);
