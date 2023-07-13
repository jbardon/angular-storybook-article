import { Meta, StoryFn, StoryObj, moduleMetadata } from '@storybook/angular';
import { Example2Component, providePrefix } from 'lib-components';

const meta: Meta<Example2Component> = {
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
};

export default meta;
type Story = StoryObj<Example2Component & {
  mockPrefix: string;
}>;

export const Default: Story = {};

export const StoryOverride: Story = {
  decorators: [
    moduleMetadata({
      providers: [
        providePrefix('[Story]')
      ]
    })
  ]
};

const Template: Story = {
  render: args => ({
    props: args,
    moduleMetadata: {
      providers: [
        providePrefix(args.mockPrefix),
      ]
    }
  })
};

export const TemplateOverride: Story = {
  ...Template,
  args: {
    // Advice to prefix variable names with mock so developers
    // don't mix them with real component properties
    mockPrefix: '[Template]',
  }
};
