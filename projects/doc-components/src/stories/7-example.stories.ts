import { Meta, StoryObj } from '@storybook/angular';
import { Example4Component } from 'lib-components';

/**
 * How input/outputs/properties and methods/lifecycle hooks are exposed in controls
 */
const meta: Meta<Example4Component> = {
  title: 'lib-components/Example 7',
  component: Example4Component,
};

export default meta;
type Story = StoryObj<Example4Component>;

export const Default: Story = {};
