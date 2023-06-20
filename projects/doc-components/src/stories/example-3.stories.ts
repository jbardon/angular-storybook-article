import { Meta, StoryFn, StoryObj, moduleMetadata } from '@storybook/angular';
import { Example2Component, providePrefix } from 'lib-components';

export default {
  title: 'lib-components/Example 3',
  component: Example2Component,
  decorators: [
    moduleMetadata({
      providers: [
        providePrefix('[Meta]'),
      ],
    })
  ],
  args: {
    name: 'Example3'
  },
  argTypes: {
    emitClickEvent: {
      control: false,
    }
  }
} as Meta<Example2Component>;

export const Default: StoryObj = {};

export const StoryOverride: StoryObj = {
  decorators: [
    moduleMetadata({
      providers: [
        providePrefix('[Story]')
      ]
    })
  ]
};

const Template: StoryFn = (args: any) => ({
  props: args,
  moduleMetadata: {
    providers: [
      providePrefix(args.mockPrefix),
    ]
  }
});

export const TemplateOverride = Template.bind({});
TemplateOverride.args = {
  // Advice to prefix variable names with mock so developers
  // don't mix them with real component properties
  mockPrefix: '[Template]'
}
