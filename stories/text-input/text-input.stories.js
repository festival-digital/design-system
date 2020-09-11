import React, { useState } from 'react';
import InputText from '.';

export default {
  title: 'Example/InputText',
  component: InputText,
  argTypes: {},
};

const defaultDecorator = (Story) => (
  <div
    style={{
      padding: '30px',
      width: '100%',
      height: '100%',
      background: '#1D1D1D',
    }}
  >
    <Story />
  </div>
);

const Template = (args) => {
  const [value, setValue] = useState(`MALETTA`);
  return <InputText {...args} value={value} onChange={setValue} />;
};

export const Input = Template.bind({});
Input.args = {
  error: '',
  id: 'Input',
  label: 'Nome',
  type: 'text',
};

Input.decorators = [defaultDecorator];

export const InputWithError = Template.bind({});
InputWithError.args = {
  error: 'uma mensagem de erro',
  id: 'InputWithError',
  label: 'Nome',
  type: 'text',
};

InputWithError.decorators = [defaultDecorator];

export const InputPassword = Template.bind({});
InputPassword.args = {
  error: '',
  id: 'InputPassword',
  label: 'Senha',
  type: 'password',
};

InputPassword.decorators = [defaultDecorator];
