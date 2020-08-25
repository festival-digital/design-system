import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputTextStyle, LabelStyle } from './text-input.style';

const InputText = ({ label, value, onChange, ...props }) => {
  const inputNode = useRef(null);

  const handleOnChange = (event) => {
    if (onChange) onChange(event.target.value);
  };

  const handleOnFocus = (event) => {
    if (event.target.value.length > 0)
      inputNode.current.classList.add('hasValue');
    else inputNode.current.classList.remove('hasValue');
  };

  useEffect(() => {
    inputNode.current.addEventListener('focusout', handleOnFocus);

    return () => {
      inputNode.current.removeEventListener('focusout', handleOnFocus);
    };
  });

  return (
    <InputGroup>
      <InputTextStyle
        {...props}
        ref={inputNode}
        value={value}
        onChange={handleOnChange}
      />
      <LabelStyle>{label}</LabelStyle>
    </InputGroup>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  label: '',
  value: '',
  onChange: () => {},
};

export default InputText;
