import React, { useState } from 'react';
import CodeInput from '.';

export default {
  title: 'Example/CodeInput',
  component: CodeInput,
  argTypes: {
    codeSize: { control: 'number' },
    error: { control: 'text' }

  },
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
        border: '2px solid white',
      }}
    >
      <Story />

    </div>

  </div>
);

const Template = (args) => {
  const [value, setValue] = useState(``);
  return <CodeInput {...args} value={value} onChange={setValue} codeSize={4}/>;
};

export const Input = Template.bind({});
Input.args = {
  error: '',
  codeSize: 4,
};

Input.decorators = [defaultDecorator];

export const InputWithError = Template.bind({});
InputWithError.args = {
  error: 'Código Inválido',
  codeSize: 4,
};

InputWithError.decorators = [defaultDecorator];


const codeSizeDecorator = (Story) => (
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


const TemplateCodeSize = (args) => {
  const [value, setValue] = useState(`MALETTA`);
  //const array = Array.apply(null, Array(args.codeSize));
  const array = [4, 6, 8, 10];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {
        array.map((item, index) => {

          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                color: '#fff',
                alignItems: 'center',
              }}
            >
              <p
               style={{
                color: '#fff',
                marginBottom: '10px',
              }}
              >
                Input prop codeSize={`{${item}}`}
              </p>
              <CodeInput {...args} codeSize={item} value={value} onChange={setValue} />

            </div>
          )
        })
      }
    </div>
  );
};

export const InputCodeSize = TemplateCodeSize.bind({});
InputCodeSize.args = {
};

InputCodeSize.decorators = [codeSizeDecorator];
