import React, { useState } from 'react';
import CodeInput from '.';

export default {
  title: 'Example/CodeInput',
  component: CodeInput,
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
    <div
    style={{
      width: '320px',
      height: '300px',
      background: '#1D1D1D',
      // border: '2px solid white',
    }}
    >
      <Story />

    </div>

  </div>
);

const Template = (args) => {
  const [value, setValue] = useState(`MALETTA`);
  return <CodeInput {...args} value={value} onChange={setValue} />;
};

export const Input = Template.bind({});
Input.args = {
  error: '',
  id: 'Input',
  label: 'Nome',
};

Input.decorators = [defaultDecorator];

export const InputWithError = Template.bind({});
InputWithError.args = {
  error: 'Código Inválido',
  id: 'InputWithError',
  label: 'Nome',
};

InputWithError.decorators = [defaultDecorator];


