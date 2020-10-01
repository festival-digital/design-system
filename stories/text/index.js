import React from 'react';
import PropTypes from 'prop-types';
import { Text as TextComponent } from './text.style';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import buildClass from '../../util/buildClass';

const SwitchIcon = ({variant}) => {
  console.log('switch oorps ', variant)
  const options = {
    'default': null,
    'fail': <WarningIcon />,
    'success': <CheckCircleIcon />,
    'warning': <InfoIcon /> ,
  }

  return options[variant] ? options[variant] : null;
}



/**
 * This is the textText component
 * @param {object} args proptypes to be pass to the component
 * @returns {React.Component}
 */
const Text = ({ children,variant, ...props }) => (
  <TextComponent {...props} className={buildClass({[variant] : true})}>
    <SwitchIcon variant={variant}/>  <span>{children}</span>
  </TextComponent>
);

Text.defaultProps = {
  variant: 'default',
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['default','fail','success', 'warning'])
};

export default Text;
