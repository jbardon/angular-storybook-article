import { Directive, Injectable, Input, inject } from '@angular/core';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { Example3Component, ExampleService, SERVICE, provideService } from 'lib-components';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
class MyService implements ExampleService {
  value$ = new BehaviorSubject('');

  getValue() {
    return this.value$.getValue();
  }
}

// Use a directive instead of a custom component for storybook
// to show the real component documentation
@Directive({
  selector: '[mockDirective]',
  providers: [provideService(MyService)]
})
class MockDirective {
  service = inject<MyService>(SERVICE);

  @Input() set mockValue(value: string) {
    this.service.value$.next(value);
  }
}

export default {
  title: 'lib-components/Example 6',
  component: Example3Component,
  decorators: [
    moduleMetadata({
      declarations: [MockDirective],
    })
  ],
  args: {
    name: 'Example6'
  },
  argTypes: {
    // Don't show in the controls list since its internal and
    // not part of the component documentation
    mockValue: { 
      table: {
        disable: true,
      },
    }
  }
} as Meta<Example3Component>;

/**
 * Major downside of using template property is to
 * forward each input and outputs manually to the component
 */
const Template: StoryFn = (args: any) => ({
  props: {
    ...args,
    mockClick: action('click'),
  },
  /*
    This is an Angular template, don't use string literal to make it dynamic
    All props are directly accessible in the template globally
  */ 
  template: `
    <lib-example-3
      mockDirective
      [mockValue]="mockValue"
      [name]="name"
      (click)="mockClick($event)"/>`
});

export const Default = Template.bind({});
Default.args = {
  mockValue: 'directive'
}

export const EditMock = Template.bind({});
EditMock.args = {
  mockValue: 'directive',
}
EditMock.argTypes = {
  mockValue: { 
    name: '[Mock] ExampleService.getValue()',
    description: 'Not part of component API',
    table: {
      disable: false,
    },
  }
}