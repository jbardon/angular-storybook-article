import { Meta, StoryObj } from '@storybook/angular';
import { MyToasterComponent } from 'lib-components';

/**
 * How to have nice MDX doc but keep TS code
 */
const meta: Meta<MyToasterComponent> = {
  title: 'lib-components/Example 2',
  component: MyToasterComponent,
  args: {
    description: 'Example 2'
  }
};

export default meta;

type Story = StoryObj<MyToasterComponent>;

export const Default: Story = {};

export const WithTitle: Story = {
  args: {
    title: 'MyTitle'
  }
};