import React from 'react';
import StickyFooter from '../lib/StickyFooter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignOps/StickyFooter',
  component: StickyFooter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StickyFooter {...args} />;

export const DefaultSettings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultSettings.args = {};

export const Overridden = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Overridden.args = {
  copyright: 'Copyright Text',
  footerText: 'Footer Text',
  position: 'left',
  children: '',
};
