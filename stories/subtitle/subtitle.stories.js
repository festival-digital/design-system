import React from 'react';
import Subtitle from '.';
 

export default {
  title: 'Example/Subtitle',
  component: Subtitle,
  argTypes: {},
};

const Template = (args) => <Subtitle {...args}>Subtítulo</Subtitle>;

/**
 * This is a component template to be render
 * @param {object} args proptypes to be pass to the component
 * @param {boolean} args.children component or string to be render inside the component
 * @returns {React.Component}
 */


 


export const Subtitlesmall = Template.bind({});
Subtitlesmall .args = {
  type: 'h3',
  
};


 
Subtitlesmall.decorators = [
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