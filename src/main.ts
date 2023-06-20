import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LibComponentsComponent } from 'lib-components';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [LibComponentsComponent],
  template: 'Hello World <lib-lib-components/>',
})
export class App {}

bootstrapApplication(App);
