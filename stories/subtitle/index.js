import React from 'react';
import PropTypes from 'prop-types';
import { Subtitle as SubtitleComponent } from './subtitle.style';
import { Subtitlesmall as SubtitlesmallComponent } from './subtitle.style';

/**
 * This is the Subtitle component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const Subtitle = ({ children }) => (
  <SubtitleComponent>
    {children}
  </SubtitleComponent>
);
/**
 * This is the Subtitle component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const Subtitlesmall = ({ children }) => (
  <SubtitlesmallComponent>
    {children}
  </SubtitlesmallComponent>
);

Subtitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Subtitle;

 