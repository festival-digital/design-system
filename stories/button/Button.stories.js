import React from 'react';
import Button from '.';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => (
  <Button {...args}>Texto</Button>
);

export const Filled = Template.bind({});
Filled.args = {};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
};

<Button outline={true}>
  sahdusha
</Button>