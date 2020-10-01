import React from 'react';
import Text from '.';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {},
};

/**
 * This is a component template to be render
 * @param {object} args proptypes to be pass to the component
 * @param {boolean} args.children component or string to be render inside the component
 * @returns {React.Component}
 */
const Template = (args) => (
  <Text {...args}>Texto Corpo Desktop e Mobile</Text>
);

const defaultDecorator =  (Story) => (
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
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  defaultDecorator
];


export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};
Success.decorators = [
  defaultDecorator,
];


export const Fail = Template.bind({});
Fail.args = {
  variant: 'fail',
};
Fail.decorators = [
  defaultDecorator,
];



export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};
Warning.decorators = [
  defaultDecorator,
];
