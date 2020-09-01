import React, { useState } from 'react';
import Toaster, {ToasterNotification} from '.';

export default {
  title: 'Example/Toaster',
  component: Toaster,
  argTypes: {
    position: {
      control: {
        type: 'inline-radio',
        options: ['top-right','bottom-right','top-left','bottom-left'],
     },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['primary','secondary','success','warning','fail'],
     },
    },
  id: { control: 'text' },
  title: { control: 'text' },
  description: { control: 'text' },

 },
};

const toastList = [
  {
    variant: 'primary',
    title: 'título 01',
    description: 'descrição 01',
    id: 1,
  },
  {
    variant: 'secondary',
    title: 'título 02',
    description: 'descrição 02',
    id: 2,
  },
  {
    variant: 'success',
    title: 'título 03',
    id: 3,
  },
  {
    variant: 'fail',
    title: 'título 04',
    id: 4,
  },
  {
    variant: 'warning',
    title: 'título 05',
    id: 5,
  },
];

const Template = (args) => {
  const {variant, id, title, description, position} = args;
  const toast = {variant, id, title, description};
  const toastList = [toast] ;
  return (
    <Toaster  toastList={toastList} position={position} />
  );
};

export const ToasterComponent = Template.bind({});
ToasterComponent.args = {
  id: 1,
  title:'título',
  description: 'descrição',
};

// ToasterComponent.decorators = [defaultDecorator];
