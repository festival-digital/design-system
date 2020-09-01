import React, { useState, useContext } from 'react';
import Icon from '@material-ui/core/Icon';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { InputGroup, Checkbox } from './checkbox.style.js'

const InputCheckbox = ({ id, label, checked, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <InputGroup>
      <Checkbox
        {...props}
        checked={checked}
        id={id}
      />
      <label htmlFor={id}>
        {label}
        { 
          checked ? (
            <Icon
              style={{
                position: 'absolute',
                fontSize: '24px',
                left: '0px',
                top: '0px',
                background: 'transparent',
                color: theme.brandColor.primary.darkest,
              }}
            >
              check
            </Icon>
          ) : null
        }
      </label>
    </InputGroup>
  );
};

InputCheckbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
};

InputCheckbox.defaultProps = {
  label: '',
  checked: false,
};

export default InputCheckbox;
