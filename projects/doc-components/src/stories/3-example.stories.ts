import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MyToasterComponent, provideDefaultTitle } from 'lib-components';

const meta: Meta<MyToasterComponent> = {
  title: 'lib-components/Example 3',
  component: MyToasterComponent,
  decorators: [
    moduleMetadata({
      providers: [
        provideDefaultTitle('Meta title'),
      ],
    })
  ],
  args: {
    description: 'Example 3'
  },
  argTypes: {
    close: {
      control: false,
    }
  }
};

export default meta;
type Story = StoryObj<MyToasterComponent & {
  mockDefaultTitle: string;
}>;

export const MetaLevel: Story = {};

export const StoryLevel: Story = {
  decorators: [
    moduleMetadata({
      providers: [
        provideDefaultTitle('Story title')
      ]
    })
  ]
};

const Template: Story = {
  render: args => ({
    props: args,
    moduleMetadata: {
      providers: [
        provideDefaultTitle(args.mockDefaultTitle),
      ]
    }
  })
};

export const TemplateLevel: Story = {
  ...Template,
  args: {
    // Advice to prefix variable names with mock so developers
    // don't mix them with real component properties
    mockDefaultTitle: 'Template title',
  }
};
