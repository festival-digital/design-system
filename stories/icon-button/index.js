import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { Button, IconWrapper } from './iconButton.style';

/**
 * This is the IconButton component
 * @param {object} args proptypes to be pass to the component
 * @param {boolean} args.children string or node to be render inside the button
 * @param {boolean} args.small flag for indentify if the component is small or large
 * @param {boolean} args.alt string used to image seo and acessibility
 * @param {boolean} args.icon string to the material icon reference.
 * Can be found here https://material.io/resources/icons/?icon=apps&style=baseline
 * @returns {React.Component}
 */
const IconButton = ({
  children, small, alt, icon,
  iconColor, ...props
}) => (
  <Button {...props}>
    <IconWrapper small={small}>
      <Icon
        style={{
          fontSize: small ? '22px' : '24px',
          color: iconColor,
        }}
      >
        {icon}
      </Icon>
    </IconWrapper>
    {children}
  </Button>
);

IconButton.propTypes = {
  alt: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  small: PropTypes.bool,
};

IconButton.defaultProps = {
  small: false,
  icon: 'mail_outline_rounded',
};

export default IconButton;
