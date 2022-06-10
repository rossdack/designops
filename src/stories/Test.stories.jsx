import React from 'react';

import { Button } from './Button';
import StickyFooter from '../lib/StickyFooter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Real/Test',
  component: StickyFooter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StickyFooter {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  copyright: 'Copyright Text',
  footerText: 'Footer Text',
  position: 'center',
  children: ''
};


