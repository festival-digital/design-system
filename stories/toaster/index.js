import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';

const BASE_ICON_URI =
  'http://ida-design-system-assets.s3-us-west-2.amazonaws.com/icons';
const ALT_ICON_TEXT =
  'Essa é a Logo da Identidade Digital Ativista, a logo é sigla da marca onde cada letra é de uma cor especifica (a letra I é verde, a letra D é vermelha e a A é roxo) e formam formas geométricas.';


import {
  NotificationContainer,
  Notification,
  CloseButton,
  NotificationImage,
  NotificationTitle,
  NotificationMessage,
  Messagebox,
  IDAIcon,
} from './toaster.style';

import buildClass from '../../util/buildClass';


const IDAIconImg = ()=> <IDAIcon
  src={`${BASE_ICON_URI}/brand.svg`}
  alt={ALT_ICON_TEXT} />;

const switchIcon = (variant) => {
  const options = {
    'primary': IDAIconImg,
    'secondary':IDAIconImg,
    'success':CheckCircleIcon,
    'warning': WarningIcon ,
    'fail': ErrorIcon,
  }

  return options[variant] ? options[variant] : InfoIcon;
}


const Toaster = ({ toastList, position, handleRemove, ...props }) => {
  return (
    <NotificationContainer className={buildClass({ [position]: true })}>
      {toastList.map((toast) => {
        return (
          <ToasterNotification
           key={toast.id}
           {...toast}
           position={position}
           handleRemove={() => handleRemove && handleRemove(toast.id)}
           />

        );
      })}
    </NotificationContainer>
  );
};

export const ToasterNotification = ({...toast}) => {
  const { description, title, variant = "primary", position, handleRemove} = toast;
  const Icon = switchIcon(variant);

  const handleClick = () => handleRemove && handleRemove();

  return (
    <Notification
    className={buildClass({[variant]: true, [position]:true})}
    >
      <NotificationImage>
        <Icon className={'icon'}/>
      </NotificationImage>
      <Messagebox
        className={buildClass({
          incomplete: !title || !description,
        })}
      >
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationMessage>{description}</NotificationMessage>
      </Messagebox>
      <CloseButton onClick={handleClick}>
        <CloseIcon className={variant} />
      </CloseButton>
    </Notification>
  )
}

const variantType = PropTypes.oneOf([
  'primary',
  'secondary',
  'success',
  'warning',
  'fail',
]);

const toastType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  variant: variantType,
  title: PropTypes.string,
  description: PropTypes.string,
});

Toaster.propTypes = {
  toastList: PropTypes.arrayOf(toastType),
  position: PropTypes.oneOf([
    'top-right',
    'bottom-right',
    'top-left',
    'bottom-left',
  ]),
};

Toaster.defaultProps = {
  position: 'top-right',
  toastList: [],
};

export default Toaster;
