import React from 'react';
import Button from '.';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => (
  <Button {...args}>
    Texto
  </Button>
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

