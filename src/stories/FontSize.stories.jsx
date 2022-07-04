import React from 'react';

import FontSize from '../lib/FontSize/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignOps/FontSize',
  component: FontSize,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FontSize {...args} />;

export const DefaultFontSize = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultFontSize.args = {};
