import React from 'react';
import PropTypes from 'prop-types';
import { FilledButton, OutlineButton } from './button.style';

const Button = (props) => {
  if (props.outline) {
    return (
      <OutlineButton {...props}>
        {props.children}
      </OutlineButton>
    );
  }

  return (
    <FilledButton {...props}>
      {props.children}
    </FilledButton>
  );
};

Button.propTypes = {
  outline: PropTypes.bool,
  white: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

Button.defaultProps = {
  outline: false,
  white: false,
};

export default Button;
