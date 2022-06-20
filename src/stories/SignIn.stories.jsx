import React from 'react';

import SignIn from '../lib/SignIn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignOps/SignIn',
  component: SignIn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SignIn {...args} />;

export const DefaultSettings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultSettings.args = {};
