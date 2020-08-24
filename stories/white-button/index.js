import React from 'react';
import PropTypes from 'prop-types';
import { FilledButton, OutlineButton } from './whiteButton.style';

const WhiteButton = (props) => {
  if (props.outline) {
    return (
      <OutlineButton {...props}>
        {props.children}
      </OutlineButton>
    );
  }

  return (
    <FilledButton {...props}>
      {props.children}
    </FilledButton>
  );
};

WhiteButton.propTypes = {
  outline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

WhiteButton.defaultProps = {
  outline: false,
};

export default WhiteButton;
