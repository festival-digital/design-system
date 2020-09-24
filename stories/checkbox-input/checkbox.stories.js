import React, { useState } from 'react';
import InputCheckbox from '.';

export default {
  title: 'Example/InputCheckbox',
  component: InputCheckbox,
  argTypes: {},
};

const Template = ({ children, ...args }) => {
  return <InputCheckbox {...args}>{children}</InputCheckbox>;
};

export const Default = Template.bind({});
Default.args = {
  children: <>Label</>,
  checked: false
};

Default.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#1D1D1D',
      }}
    >
      <Story />
    </div>
  ),
];

export const Checked = Template.bind({});
Checked.args = {
  children: <>Label</>,
  checked: true
};

Checked.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#1D1D1D',
      }}
    >
      <Story />
    </div>
  ),
];
