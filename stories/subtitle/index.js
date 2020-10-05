import React from 'react';
import PropTypes from 'prop-types';
import { Subtitle as SubtitleComponent } from './subtitle.style';
import { SubtitleSmall as SubtitleSmallComponent } from './subtitle.style';

/**
 * function that render default component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const renderDefault = ({className, children, ...props }) => (
  <SubtitleComponent {...props} className={className}>
    {children}
  </SubtitleComponent>
);

/**
 * functiom the render small component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const renderSmall = ({ className, children, ...props }) => (
  <SubtitleSmallComponent {...props} className={className}>
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
  className : PropTypes.string;
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  type: PropTypes.string,
};

Subtitle.defaultProps = {
  type: 'h2',
  className: null,
};

export default Subtitle;

