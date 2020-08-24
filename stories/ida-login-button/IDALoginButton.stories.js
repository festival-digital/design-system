import React from 'react';
import IDALoginButton from '.';

export default {
  title: 'Example/IDALoginButton',
  component: IDALoginButton,
  argTypes: {},
};

/**
 * This is a component template to be render 
 * @param {object} args proptypes to be pass to the component 
 * @param {boolean} args.small flag for indentify if your components is small or large
 * @param {boolean} args.dark flag for indentify if your components is defaut mode or dark mode
 * @returns {React.Compoenent}
 */
const Template = (args) => (
  <IDALoginButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [(Story) => <div style={{ padding: '30px', width: '100%', height: '100%', background: '#000000' }}><Story/></div>];

export const SmallDefault = Template.bind({});
SmallDefault.args = {
  small: true,
};
SmallDefault.decorators = [(Story) => <div style={{ padding: '30px', width: '100%', height: '100%', background: '#000000' }}><Story/></div>];

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};
Dark.decorators = [(Story) => <div style={{ padding: '30px', width: '100%', height: '100%', background: '#ffffff' }}><Story/></div>];

export const SmallDark = Template.bind({});
SmallDark.args = {
  small: true,
  dark: true,
};
SmallDark.decorators = [(Story) => <div style={{ padding: '30px', width: '100%', height: '100%', background: '#ffffff' }}><Story/></div>];