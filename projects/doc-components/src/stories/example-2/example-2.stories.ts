import { Meta, StoryObj } from '@storybook/angular';
import { Example1Component } from 'lib-components';

/**
 * How to have nice MDX doc but keep TS code
 */
export default {
  component: Example1Component,
  includeStories: [],
  args: {
    name: 'Example2'
  }
} as Meta<Example1Component>;

export const Default: StoryObj = {};
