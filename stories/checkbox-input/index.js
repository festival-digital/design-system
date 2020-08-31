import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Checkbox } from './checkbox.style.js'

const InputCheckbox = ({ id, label, ...props }) => {

  return (
    <InputGroup>
      <Checkbox
        {...props}
      />
      <label htmlFor={id}> {label}</label>
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
