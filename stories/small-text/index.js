import React from 'react';
import PropTypes from 'prop-types';
import {SmalltextComponent } from './Smalltext.style';

/**
 * This is the Smalltext component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const Smalltext = ({ children, className='', customStyle='', variant='', ...props }) => (
  <SmalltextComponent {...props} className={`${variant} ${className}`} customStyle={customStyle}>
    {children}
  </SmalltextComponent>
);

Smalltext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  customStyle: PropTypes.string,
  variant: PropTypes.oneOf(["text-fail", "text-success", "text-warning"]),
};

export default Smalltext;
