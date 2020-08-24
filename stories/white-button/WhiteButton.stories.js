import React from 'react';
import WhiteButton from '.';

export default {
  title: 'Example/WhiteButton',
  component: WhiteButton,
  argTypes: {},
  decorators: [(Story) => <div style={{ padding: '30px', width: '100%', height: '100%', background: '#000000' }}><Story/></div>]
};

const Template = (args) => (
  <WhiteButton {...args}>
    Texto
  </WhiteButton>
);

export const Filled = Template.bind({});
Filled.args = {};

export const UnableFilled = Template.bind({});
UnableFilled.args = {
  disabled: true,
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
};

export const UnableOutline = Template.bind({});
UnableOutline.args = {
  outline: true,
  disabled: true,
};

export const SmallFilled = Template.bind({});
SmallFilled.args = {
  small: true,
};

export const SmallUnableFilled = Template.bind({});
SmallUnableFilled.args = {
  disabled: true,
  small: true,
};

export const SmallOutline = Template.bind({});
SmallOutline.args = {
  outline: true,
  small: true,
};

export const SmallUnableOutline = Template.bind({});
SmallUnableOutline.args = {
  outline: true,
  disabled: true,
  small: true,
};
