import { Directive, Injectable, Input, inject } from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {MyToasterComponent} from 'lib-components';
import { BehaviorSubject } from 'rxjs';
import {
  IToasterConfigService,
  provideConfigService,
  TOASTER_CONFIG_SERVICE
} from 'projects/lib-components/src/lib/services/my-toaster-config.service';

@Injectable({ providedIn: 'root' })
class MyService implements IToasterConfigService {
  value$ = new BehaviorSubject('');

  getTitle() {
    return this.value$.getValue();
  }
}

// Use a directive instead of a custom component for storybook
// to show the real component documentation
@Directive({
  selector: '[mockDirective]',
  providers: [provideConfigService(MyService)]
})
class MockDirective {
  service = inject<MyService>(TOASTER_CONFIG_SERVICE);

  @Input() set mockTitle(value: string) {
    this.service.value$.next(value);
  }
}

const meta: Meta<MyToasterComponent> = {
  title: 'lib-components/Example 6',
  component: MyToasterComponent,
  decorators: [
    moduleMetadata({
      declarations: [MockDirective],
    })
  ],
  args: {
    description: 'Example 6'
  },
  argTypes: {
    // Don't show in the controls list since it's internal and
    // not part of the component documentation
    mockTitle: {
      table: {
        disable: true,
      },
    }
  } as any
};

export default meta;

type Story = StoryObj<MyToasterComponent & {
  mockTitle: string;
}>;

/**
 * Major downside of using template property is to
 * forward each input and outputs manually to the component
 */
const Template: Story = {
  render: args => ({
    props: {
      ...args,
      mockClose: action('close'),
    },
    /*
      This is an Angular template, don't use string literal to make it dynamic
      All props are directly accessible in the template globally
    */
    template: `
      <my-toaster
        mockDirective
        [mockTitle]="mockTitle"
        [description]="description"
        (close)="mockClose($event)"/>`
  })
};

export const Default: Story = {
  ...Template,
  args: {
    mockTitle: 'Directive title'
  }
};

export const EditMock: Story = {
  ...Template,
  args: {
    mockTitle: 'Edit from control',
  },
  argTypes: {
    mockTitle: {
      name: '[Mock] IToasterConfigService.getValue()',
      description: 'Not part of component API',
      table: {
        disable: false,
      },
    }
  }
}
