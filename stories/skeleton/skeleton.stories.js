import React from 'react';
import Skeleton from '.';

export default {
  title: 'Example/Skeleton',
  component: Skeleton,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' }

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
  <p>animation={`{wave}`} variant={`{text}`}</p>
  <Skeleton {...args}width={'85%'}  variant={'text'} animation={'wave'}/>
  <Skeleton {...args} width={'85%'} variant={'text'} animation={'wave'}/>
  <Skeleton {...args} width={'78%'} variant={'text'} animation={'wave'}/>
  <Skeleton {...args} width={'83%'} variant={'text'} animation={'wave'}/>

  <p>animation={`{pulse}`} variant={`{rect}`}</p>
  <Skeleton {...args} width={'50%'} height={'200px'} animation={'wave'} variant={'rect'} />

  <p>animation={`{pulse}`} variant={`{circle}`} effectColor={'{#f15bb5}'}</p>
  <Skeleton {...args} width={'50px'} height={'50px'} animation={'pulse'} variant={'circle'} effectColor={'#fe7f2d'}/>

    </>;
};

export const SkeletonLoading = Template.bind({});
SkeletonLoading.args = {

};

SkeletonLoading.decorators = [defaultDecorator];


