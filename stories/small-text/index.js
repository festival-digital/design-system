import React from 'react';
import PropTypes from 'prop-types';
import { Smalltext as SmalltextComponent } from './Smalltext.style';

/**
 * This is the Smalltext component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const Smalltext = ({ children }) => (
  <SmalltextComponent>
    {children}
  </SmalltextComponent>
);

Smalltext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Smalltext;