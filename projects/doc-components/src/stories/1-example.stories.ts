import { Meta, StoryObj } from '@storybook/angular';
import { Example1Component } from 'lib-components';

/**
 * How to write very simple stories
 * by giving custom args names
 */
const meta: Meta<Example1Component> = {
  title: 'lib-components/Example 1',
  component: Example1Component,
  args: {
    name: 'Example1'
  }
};

export default meta;

type Story = StoryObj<Example1Component>;
export const Default: Story = {};

export const CustomName: Story = {
  args: {
    name: 'CustomName'
  }
};

const Template: Story = {
  render: args => ({
    props: args
  }),
};

export const FromTemplate: Story = {
  ...Template,
  args: {
    name: 'FromTemplate'
  }
};
