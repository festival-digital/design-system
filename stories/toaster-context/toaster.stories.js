import React, { useState, useContext, useEffect } from 'react';
import Toaster from '../toaster';
import ToasterContext, {ToasterProvider} from '.'
import {Button} from './toaster.context.style';

export default {
  title: 'Example/ToasterContext',
  component: ToasterProvider,
  argTypes: {
    position: {
      control: {
        type: 'inline-radio',
        options: ['top-right','bottom-right','top-left','bottom-left'],
     },
    },
  },
};

const defaultDecorator = (Story) => (
  <div
    style={{
      padding: '30px',
      width: '100%',
      height: '100%',
      background: '#ecf0f1',
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <Story />
  </div>
);

const toastList = [
  {
    variant: 'primary',
    title: 'título 01',
    description: 'descrição 01',
  },
  {
    variant: 'secondary',
    title: 'título 01',
    description: 'descrição 01',
  },
  {
    variant: 'success',
    title: 'título 02',
  },
  {
    variant: 'fail',
    title: 'título 03',
  },
  {
    variant: 'warning',
    title: 'título 05',
  },
];

const Template = (args) => {
  return (
    <ToasterProvider>
    <Options position={args.position} />
    </ToasterProvider>
  );
};

const Options = ({position}) => {
  const {addToast, toastList ,setPosition} = useContext(ToasterContext);
  const buttons = ['primary','secondary','success','warning','fail'];
  const id = Math.floor((Math.random() * 999) + 1);

  const handleClick = (variant, title, description, id) => {
    addToast({variant, title, description, id})
  }

  useEffect(() => {
    setPosition(position);
  }, [position])

  return(
    <div>
      {buttons.map(variant => (
        <Button
          key={`${variant}`}
          className={`${variant}`}
          onClick={() => handleClick(variant, 'um título', 'uma descrição',id)}
          >
            {variant}
        </Button>))}
    </div>
  )
}

export const ToasterComponent = Template.bind({});
ToasterComponent.args = {
  toastList,
};

ToasterComponent.decorators = [defaultDecorator];
