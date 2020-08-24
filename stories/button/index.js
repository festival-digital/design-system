import React from 'react';
import PropTypes from 'prop-types';
import { FilledButton, OutlineButton } from './button.style';

const Button = ({ outline, children, ...props }) => {
  if (outline) {
    return <OutlineButton {...props}>{children}</OutlineButton>;
  }

  return <FilledButton {...props}>{children}</FilledButton>;
};

Button.propTypes = {
  outline: PropTypes.bool,
  white: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

Button.defaultProps = {
  outline: false,
  white: false,
};

export default Button;
