import React from 'react';
import Smalltext from '.';

export default {
  title: 'Example/Smalltext',
  component: Smalltext,
  argTypes: {},
};

/**
 * This is a component template to be render
 * @param {object} args proptypes to be pass to the component
 * @param {boolean} args.children component or string to be render inside the component
 * @returns {React.Component}
 */
const Template = (args) => (
  <Smalltext {...args}>Texto de apoio Desktop e Mobile</Smalltext>
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