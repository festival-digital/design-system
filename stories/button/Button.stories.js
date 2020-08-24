import React from 'react';
import Button from '.';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args}>Texto</Button>;

export const Filled = Template.bind({});
Filled.args = {};
Filled.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#ffffff',
      }}
    >
      <Story />
    </div>
  ),
];

export const WhiteFilled = Template.bind({});
WhiteFilled.args = {
  white: true,
};
WhiteFilled.decorators = [
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

export const UnableFilled = Template.bind({});
UnableFilled.args = {
  disabled: true,
};
UnableFilled.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#ffffff',
      }}
    >
      <Story />
    </div>
  ),
];

export const SmallFilled = Template.bind({});
SmallFilled.args = {
  small: true,
};
SmallFilled.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#ffffff',
      }}
    >
      <Story />
    </div>
  ),
];

export const WhiteSmallFilled = Template.bind({});
WhiteSmallFilled.args = {
  small: true,
  white: true,
};
WhiteSmallFilled.decorators = [
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

export const SmallUnableFilled = Template.bind({});
SmallUnableFilled.args = {
  disabled: true,
  small: true,
};
SmallUnableFilled.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#ffffff',
      }}
    >
      <Story />
    </div>
  ),
];

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
};
Outline.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#ffffff',
      }}
    >
      <Story />
    </div>
  ),
];

export const WhiteOutline = Template.bind({});
WhiteOutline.args = {
  outline: true,
  white: true,
};
WhiteOutline.decorators = [
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

export const UnableOutline = Template.bind({});
UnableOutline.args = {
  outline: true,
  disabled: true,
};
UnableOutline.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#ffffff',
      }}
    >
      <Story />
    </div>
  ),
];

export const SmallOutline = Template.bind({});
SmallOutline.args = {
  outline: true,
  small: true,
};
SmallOutline.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#ffffff',
      }}
    >
      <Story />
    </div>
  ),
];

export const WhiteSmallOutline = Template.bind({});
WhiteSmallOutline.args = {
  outline: true,
  small: true,
  white: true,
};
WhiteSmallOutline.decorators = [
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

export const SmallUnableOutline = Template.bind({});
SmallUnableOutline.args = {
  outline: true,
  disabled: true,
  small: true,
};
SmallUnableOutline.decorators = [
  (Story) => (
    <div
      style={{
        padding: '30px',
        width: '100%',
        height: '100%',
        background: '#ffffff',
      }}
    >
      <Story />
    </div>
  ),
];
