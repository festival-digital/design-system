import React from 'react';
import PropTypes from 'prop-types';
import { FilledButton, OutlineButton, Loader } from './button.style';

/**
 * This is the Button component
 * @param {object} args proptypes to be pass to the component
 * @param {boolean} args.isLoading flag for set loading state
 * @param {boolean} args.children flag for indentify if the component is defaut mode or dark mode
 * @param {boolean} args.outline flag for indentify if the component is small or large
 * @returns {React.Component}
 */
const Button = ({ children, outline, ...props }) => {
  if (outline) {
    return <OutlineButton {...props}><Loader {...props}/> <span>{children}</span></OutlineButton>;
  }

  return <FilledButton {...props}><Loader {...props}/> <span>{children}</span></FilledButton>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  isLoading: PropTypes.bool,
  outline: PropTypes.bool,
  white: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: true,
  outline: false,
  white: false,
};

export default Button;
