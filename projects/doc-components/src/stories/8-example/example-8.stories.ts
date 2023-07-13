import { Component, Directive, HostListener, Input, inject } from '@angular/core';
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { Example5Service } from 'lib-components';

@Directive({
  selector: 'button[mockDirective]',
  standalone: true,
})
class MockDirective {
  toastService = inject(Example5Service);

  @Input('mockMessage') message = '';
  @Input('mockTimeoutMs') timeoutMs: number | undefined;

  @HostListener('click')
  openToaster() {
    this.toastService.toast(this.message, this.timeoutMs);
  }

  constructor(){
    console.log('teste')
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
    mockTimeoutMs: 5_000,
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
  mockMessage: string;
  mockTimeoutMs: number;
}>

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
      <button mockDirective
              [mockMessage]="mockMessage"
              [mockTimeoutMs]="mockTimeoutMs">Open</button>`
  })
};

export const NoCode: Story = {
  ...Template,
  args: {
    mockMessage: 'No code'
  }
};

export const InlineCode: Story = {
  ...Template,
  args: {
    mockMessage: 'Inline code'
  }
};

export const FileCode: Story = {
  ...Template,
  args: {
    mockMessage: 'File code'
  }
};