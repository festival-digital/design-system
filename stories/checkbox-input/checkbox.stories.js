import React, { useState } from 'react';
import InputCheckbox from '.';

export default {
  title: 'Example/InputCheckbox',
  component: InputCheckbox,
  argTypes: {},
};

const Template = (args) => {
  return <InputCheckbox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
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
  label: 'Label',
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
