import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../../../dist/doc-components/compodoc/documentation.json';

setCompodocJson(docJson);

export const parameters = {
  layout: 'centered',
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    expanded: true,
  },
  docs: {
    inlineStories: true,
  },
};
