import React from 'react';
import IconButton from '.';

export default {
  title: 'Example/IconButton',
  component: IconButton,
  argTypes: {},
};

/**
 * This is a component template to be render
 * @param {object} args proptypes to be pass to the component
 * @param {boolean} args.small flag for indentify if the component is small or large
 * @param {boolean} args.dark flag for indentify if the component is defaut mode or dark mode
 * @returns {React.Component}
 */
const Template = (args) => <IconButton {...args}>Texto</IconButton>;

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

export const Small = Template.bind({});
Small.args = { small: true };
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
