import React from 'react';
import PropTypes from 'prop-types';
import { Text as TextComponent } from './text.style';

/**
 * This is the textText component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const Text = ({ children }) => (
  <TextComponent>
    {children}
  </TextComponent>
);

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Text;
