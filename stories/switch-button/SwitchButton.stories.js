import React from 'react';
import SwitchButton from '.';

export default {
  title: 'Example/SwitchButton',
  component: SwitchButton,
  argTypes: {},
};

const Template = (args) => <SwitchButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedIndex: 1
};
Default.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#000000',
      }}
    >
      <Story />
    </div>
  ),
];

export const Small = Template.bind({});
Small.args = {
  small: true,
};
Small.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#000000',
      }}
    >
      <Story />
    </div>
  ),
];
