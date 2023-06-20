import { Meta, StoryFn, StoryObj } from '@storybook/angular';
import { Example1Component } from 'lib-components';

/**
 * How to write very simple stories
 * by giving custom args names
 */
export default {
  title: 'lib-components/Example 1',
  component: Example1Component,
  args: {
    name: 'Example1'
  }
} as Meta<Example1Component>;

export const Default: StoryObj = {};

export const CustomName: StoryObj = {
  args: {
    name: 'CustomName'
  }
};

const Template: StoryFn = (args: any) => ({
  props: args
});

export const FromTemplate = Template.bind({});
FromTemplate.args = {
  name: 'FromTemplate'
}