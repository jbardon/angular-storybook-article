import { Component, EventEmitter, HostListener, InjectionToken, Input, Output, Provider, inject } from '@angular/core';

export const PREFIX = new InjectionToken<string>('PREFIX');

export function providePrefix(prefix: string): Provider {
  return {
    provide: PREFIX,
    useValue: prefix,
  }
}

@Component({
  selector: 'lib-2-example',
  standalone: true,
  template: `{{ prefix }} {{ name }}`,
  styles: [' :host { cursor: pointer; } ']
})
export class Example2Component {
  @Input() name = '';
  @Output() click = new EventEmitter<string>();

  protected prefix = inject(PREFIX);

  @HostListener('click', ['$event'])
  emitClickEvent(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit(this.name);
  }
}
