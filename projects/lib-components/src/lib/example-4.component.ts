import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Check compodoc settings in .compodocrc.json to know
 * which elements are skipped and won't appear in Storybook
 */
@Component({
  selector: 'lib-example-4',
  standalone: true,
  template: `
    <p>Check controls tab below</p>
    <p>If the widget don't appear press "A" or "D" key which are shortcuts to manipulate it</p>
  `,
})
export class Example4Component {
  @Input() input = 'Default value';
  @Output() output = new EventEmitter();

  /**
   * Code comments appears as description
   */
  publicProperty: boolean | undefined;
  protected protectedProperty: any;
  private privateProperty: any;

  /**
   * @internal
   */
  internalProperty: any;

  publicMethod(){}
  protected protectedMethod(){}
  private privateMethod(){}

  /**
   * @internal
   */
  internalMethod(){}
}
