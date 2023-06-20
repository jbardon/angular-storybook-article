import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Component, Injectable, Input, createComponent, inject, reflectComponentType } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-example-5',
  template: `<div>{{ message }}</div>`,
  styles: [`
    div {
      position: fixed;
      right: 5vh;
      bottom: 5vh;

      height: 50px;
      line-height: 50px;
      width: 200px;

      text-align: center;
      background: burlywood;

      border: solid 1px black;
    }
  `]
})
class ToasterComponent {
  @Input() message = '';
}

@Injectable({
  providedIn: 'root'
})
export class Example5Service {
  document = inject(DOCUMENT);
  applicationRef = inject(ApplicationRef);

  toast(message: string, timeoutMs: number = 10_000) {
    const hostElement = this.createHostElement();

    const componentRef = createComponent(ToasterComponent, {
      hostElement,
      environmentInjector: this.applicationRef.injector,
    });
    componentRef.setInput('message', message);

    setTimeout(() => componentRef.destroy(), timeoutMs);

    this.applicationRef.attachView(componentRef.hostView);
  }

  private createHostElement() {
    const componentMetadata = reflectComponentType(ToasterComponent);
    const hostElement = this.document.createElement(componentMetadata!.selector);

    const bodyElement = this.document.querySelector('body') as HTMLBodyElement;
    bodyElement.appendChild(hostElement);

    return hostElement;
  }
}
