import React from 'react';

import ColorPalette from '../lib/ColorPalette/index.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignOps/ColorPalette',
  component: ColorPalette,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ColorPalette {...args} />;

export const DefaultColorPalette = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultColorPalette.args = {};
