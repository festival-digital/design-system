import React from 'react';
import PropTypes from 'prop-types';
import { Title as TitleComponent } from './title.style';

/**
 * This is the Title component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const Title = ({ children }) => (
  <TitleComponent>
    {children}
  </TitleComponent>
);

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Title;
