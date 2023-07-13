import { Meta, StoryObj } from '@storybook/angular';
import { Example1Component } from 'lib-components';

/**
 * How to have nice MDX doc but keep TS code
 */
const meta: Meta<Example1Component> = {
  title: 'lib-components/Example 2',
  component: Example1Component,
  args: {
    name: 'Example2'
  }
};

export default meta;

type Story = StoryObj<Example1Component>;
export const Default: Story = {};
