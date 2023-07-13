import { Meta, StoryObj } from '@storybook/angular';
import {Example5Component} from "./example-5.component";

const meta: Meta<Example5Component> = {
  title: 'lib-components/Example 5',
  component: Example5Component,
  args: {
    name: 'Example1'
  },
  // Can't hide canvas by default
  parameters: {
    docsOnly: true,
    docs: {
      canvas: {
        sourceState: 'none',
        withToolbar: false,
      },
      controls: {

      }
    }
  }
};

export default meta;

type Story = StoryObj<Example5Component>;
export const Default: Story = {
  // Same name as page title to avoid having side menu sub item
  name: 'Example 5'
};
