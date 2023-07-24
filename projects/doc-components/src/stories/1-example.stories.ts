import { Meta, StoryObj } from '@storybook/angular';
import { MyToasterComponent } from 'lib-components';

/**
 * How to write very simple stories
 * by giving custom args names
 */
const meta: Meta<MyToasterComponent> = {
  title: 'lib-components/Example 1',
  component: MyToasterComponent,
  args: {
    description: 'Meta description'
  }
};

export default meta;

type Story = StoryObj<MyToasterComponent>;
export const Default: Story = {};

export const FromStory: Story = {
  args: {
    description: 'Story description'
  }
};

const Template: Story = {
  args: {
    description: 'Template description'
  }
};

export const FromTemplate: Story = {
  ...Template,
};
