import React, { useState, useContext } from 'react';
import Icon from '@material-ui/core/Icon';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { InputGroup, Checkbox } from './checkbox.style.js'

<<<<<<< HEAD
const InputCheckbox = ({
  id, children, checked, customStyle, ...props
}) => {
=======
const InputCheckbox = ({ id, label, checked, onClick, onChange, ...props }) => {
>>>>>>> cdb62a28faa514e9bd06d377e06fadec0f6f2e36
  const theme = useContext(ThemeContext);

  return (
    <InputGroup
      onClick={onClick}
    >
      <Checkbox
        {...props}
        customStyle={customStyle}
        checked={checked}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>
<<<<<<< HEAD
        {children}
        { 
=======
        {label}
        {
>>>>>>> cdb62a28faa514e9bd06d377e06fadec0f6f2e36
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
  children: PropTypes.node,
  customStyle: PropTypes.string,
  checked: PropTypes.bool,
};

InputCheckbox.defaultProps = {
  children: <></>,
  customStyle: '',
  checked: false,
};

export default InputCheckbox;
