import React from 'react';
import PropTypes from 'prop-types';
import { Subtitle as SubtitleComponent } from './subtitle.style';
import { SubtitleSmall as SubtitleSmallComponent } from './subtitle.style';

/**
 * function that render default component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const renderDefault = ({ children, ...props }) => (
  <SubtitleComponent {...props}>
    {children}
  </SubtitleComponent>
);

/**
 * functiom the render small component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const renderSmall = ({ children, ...props }) => (
  <SubtitleSmallComponent {...props}>
    {children}
  </SubtitleSmallComponent>
);

const types = {
  h2: renderDefault,
  h3: renderSmall, 
};

const Subtitle = ({ type, ...props }) => {
  if (!types[type]) return renderDefault(props);
  return types[type](props);
}

Subtitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  type: PropTypes.string,
};

Subtitle.defaultProps = {
  type: 'h2',
};

export default Subtitle;

 