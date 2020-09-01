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


export const Default = Template.bind({});
Default.args = {};
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

 
