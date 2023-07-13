import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-example-1',
  standalone: true,
  template: `{{ name }}`,
  styles: [' :host { cursor: pointer; } ']
})
export class Example1Component {
  @Input() name = '';
  @Output() click = new EventEmitter<string>();

  @HostListener('click', ['$event'])
  emitClickEvent(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit(this.name);
  }
}
