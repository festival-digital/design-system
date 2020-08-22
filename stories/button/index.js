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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

Button.defaultProps = {
  outline: false,
};

export default Button;
