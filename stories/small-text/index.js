import React from 'react';
import PropTypes from 'prop-types';
import {SmalltextComponent } from './Smalltext.style';

/**
 * This is the Smalltext component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const Smalltext = ({ children, className='', variant='', ...props }) => (
  <SmalltextComponent {...props} className={`${variant} ${className}`}>
    {children}
  </SmalltextComponent>
);

Smalltext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(["text-fail", "text-success", "text-warning"]),
  className: PropTypes.string,
};

export default Smalltext;
