import { Component, Directive, HostListener, Input, inject } from '@angular/core';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
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
})
class NoopComponent {}

export default {
  component: NoopComponent,
  includeStories: [],
  decorators: [
    moduleMetadata({
      imports: [MockDirective]
    })
  ],
  args: {
    mockTimeoutMs: 5_000,
  }
} as Meta<NoopComponent>;

export const Template: StoryFn = (args) => ({
  props: args,
  template: `
    <button mockDirective
            [mockMessage]="mockMessage"
            [mockTimeoutMs]="mockTimeoutMs">Open</button>`
});