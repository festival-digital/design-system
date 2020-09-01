import React from 'react';
import PropTypes from 'prop-types';
import { FilledButton, OutlineButton } from './button.style';

/**
 * This is the Button component
 * @param {object} args proptypes to be pass to the component
 * @param {boolean} args.outline flag for indentify if the component is small or large
 * @param {boolean} args.children flag for indentify if the component is defaut mode or dark mode
 * @returns {React.Component}
 */
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
