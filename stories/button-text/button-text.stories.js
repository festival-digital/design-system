import React from 'react';
import ButtonText from '.';

export default {
  title: 'Example/ButtonText',
  component: ButtonText,
  argTypes: {},
};

const Template = (args) => <ButtonText {...args}>Texto</ButtonText>;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
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

export const White = Template.bind({});
White.args = {
  white: true,
};
White.decorators = [
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
Small.args = {
  small: true,
};
Small.decorators = [
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

export const WhiteSmall = Template.bind({});
WhiteSmall.args = {
  small: true,
  white: true,
};
WhiteSmall.decorators = [
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

export const ArrowDefault = Template.bind({});
ArrowDefault.args = {
  underline: false,
};
ArrowDefault.decorators = [
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

export const ArrowWhite = Template.bind({});
ArrowWhite.args = {
  white: true,
  underline: false,
};
ArrowWhite.decorators = [
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

export const ArrowSmall = Template.bind({});
ArrowSmall.args = {
  small: true,
  underline: false,
};
ArrowSmall.decorators = [
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

export const ArrowWhiteSmall = Template.bind({});
ArrowWhiteSmall.args = {
  small: true,
  white: true,
  underline: false,
};
ArrowWhiteSmall.decorators = [
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
