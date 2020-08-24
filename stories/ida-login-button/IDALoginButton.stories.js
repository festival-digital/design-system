import React from 'react';
import IDALoginButton from '.';

export default {
  title: 'Example/IDALoginButton',
  component: IDALoginButton,
  argTypes: {},
};

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