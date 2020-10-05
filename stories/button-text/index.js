import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { ArrowButton, UnderlineButton } from './button-text.style';

const ButtonText = ({ className, underline, children, small, ...props }) => {
  if (underline) {
    return (
      <UnderlineButton {...props} small={small} className={className}>
        {children}
      </UnderlineButton>
    );
  }
  return (
    <ArrowButton {...props} small={small}  className={className}>
      <ArrowBackIosIcon
        small={small}
        style={{
          fontSize: small ? '16px' : '24px',
          verticalAlign: 'middle',
          display: 'inline-block',
          marginRight: '12px',
        }}
      />
      {children}
    </ArrowButton>
  );
};

ButtonText.propTypes = {
  className: PropTypes.string,
  underline: PropTypes.bool,
  white: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

ButtonText.defaultProps = {
  className: null,
  underline: true,
  white: false,
};

export default ButtonText;
