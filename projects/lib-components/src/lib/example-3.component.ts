import { Component, EventEmitter, HostListener, InjectionToken, Input, Output, Provider, Type, inject } from '@angular/core';

export interface ExampleService {
  getValue(): string;
}

export const SERVICE = new InjectionToken<ExampleService>('PREFIX');

export function provideService(service: Type<ExampleService>): Provider {
  return {
    provide: SERVICE,
    useClass: service,
  }
}

@Component({
  selector: 'lib-example-3',
  standalone: true,
  template: `{{ name }} ({{ service.getValue() }})`,
})
export class Example3Component {
  @Input() name = '';
  @Output() click = new EventEmitter<string>();

  protected service = inject(SERVICE);

  @HostListener('click', ['$event'])
  emitClickEvent(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit(this.name);
  }
}
