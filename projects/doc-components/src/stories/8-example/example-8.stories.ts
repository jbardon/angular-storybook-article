import { Component, Directive, HostListener, Input, inject } from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { MyToasterService} from 'lib-components';

@Directive({
  selector: 'button[mockDirective]',
  standalone: true,
})
class MockDirective {
  toastService = inject(MyToasterService);

  @Input('mockDescription') description = '';
  @Input('mockTitle') title?: string;

  @HostListener('click')
  openToaster() {
    this.toastService.toast(this.description, this.title);
  }
}

// Hides away any public elements on mock
@Component({
  standalone: true,
  template: '',
})
class NoopComponent {}

const meta: Meta<NoopComponent> = {
  title: 'lib-components/Example 8',
  component: NoopComponent,
  decorators: [
    moduleMetadata({
      imports: [MockDirective]
    })
  ],
  args: {
    mockTitle: 'Title',
  },
  parameters: {
    docs: {
      source: {
        language: 'javascript',
        format: true,
      },
    },
  }
};
export default meta;

type Story = StoryObj<NoopComponent & {
  mockDescription: string;
  mockTitle?: string;
}>

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
      <button mockDirective
              [mockDescription]="mockDescription"
              [mockTitle]="mockTitle">Open</button>`
  })
};

export const NoCode: Story = {
  ...Template,
  args: {
    mockDescription: 'No code'
  }
};

export const InlineCode: Story = {
  ...Template,
  args: {
    mockDescription: 'Inline code'
  }
};

export const FileCode: Story = {
  ...Template,
  args: {
    mockDescription: 'File code'
  }
};