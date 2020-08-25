import React, { useState } from 'react';
import InputText from '.';

export default {
  title: 'Example/InputText',
  component: InputText,
  argTypes: {},
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <InputText {...args} value={value} onChange={setValue} />;
};

export const InputTextComponent = Template.bind({});
InputTextComponent.args = {
  label: 'Nome',
};
InputTextComponent.decorators = [
  (Story) => (
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
  ),
];
