import React from 'react';
import Animation from '.';

export default {
  title: 'Example/Animation',
  component: Animation,
  argTypes: {
      animation: {
        control: {
          type: 'inline-radio',
          options: ['slideInUp','slideInRight','slideInDown','slideInLeft','slideOutUp','slideOutRight',
          'slideOutDown','slideOutLeft'],
        },
      },
      delay: { control: 'text' },
      duration: { control: 'text' },
  },
};

const defaultDecorator = (Story) => (
  <div
    style={{
      padding: '30px',
      width: '100%',
      height: '500px',
      background: '#ecf0f1',
    }}
  >
      <Story />

  </div>
);

const Template = (args) => {
  return <>

  <Animation {...args}>
    <div
      style={{
        padding: '10px 10px',
        fontSize: '25px',
        color: '#000'
      }}

    >
      <p>Efeitos de animação</p>
      <p>lorem ipsum</p>
    </div>
  </Animation>
    </>;
};

export const AnimationEffects = Template.bind({});
AnimationEffects.args = {

};

AnimationEffects.decorators = [defaultDecorator];


