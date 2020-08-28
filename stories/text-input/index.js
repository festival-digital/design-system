import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {
  IconContainer,
  InputGroup,
  InputBase,
  InputTextStyle,
  FieldsetStyle,
  LabelStyle,
  InputMessage,
} from './text-input.style';

import buildClass from '../../util/buildClass';

const hasError = (error) => error.length > 0;

const InputText = ({ error, id, label, onChange, type, value, ...props }) => {
  const inputNode = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (event) => {
    if (onChange) onChange(event.target.value);
  };

  const handleOnFocus = (event) => {
    if (event.target.value.length > 0) {
      inputNode.current.classList.add('hasValue');
      inputNode.current.classList.add('validation');
    } else {
      inputNode.current.classList.remove('hasValue');
      inputNode.current.classList.remove('validation');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    inputNode.current.addEventListener('focusout', handleOnFocus);

    return () => {
      inputNode.current.removeEventListener('focusout', handleOnFocus);
    };
  }, [inputNode]);

  useEffect(() => {
    if (showPassword) inputNode.current.type = 'text';
    else inputNode.current.type = type;
  }, [showPassword, inputNode]);

  return (
    <InputGroup>
      <InputBase>
        <InputTextStyle
          {...props}
          value={value}
          onChange={handleOnChange}
          id={id}
          ref={inputNode}
          type={type}
        />
        <LabelStyle
          htmlFor={id}
          className={buildClass({ fail: hasError(error) })}
        >
          {label}
        </LabelStyle>
        <FieldsetStyle
          aria-hidden="true"
          className={buildClass({ fail: hasError(error) })}
        >
          <legend>
            <span>{label}</span>
          </legend>
        </FieldsetStyle>
        <IconContainer
          className={buildClass({ icon: true, showIcon: type === 'password' })}
        >
          <If condition={type !== 'password'}>
            <ValidationIcon errorMessage={error} />
          </If>
          <If condition={type === 'password'}>
            <PasswordIcon
              showPassword={showPassword}
              toggleShowPassword={toggleShowPassword}
            />
          </If>
        </IconContainer>
      </InputBase>
      <InputMessage>{error}</InputMessage>
    </InputGroup>
  );
};

const ValidationIcon = ({ errorMessage }) =>
  hasError(errorMessage) ? (
    <CancelIcon className={buildClass({ fail: true })} />
  ) : (
    <CheckCircleIcon className={buildClass({ success: true })} />
  );

const PasswordIcon = ({ showPassword, toggleShowPassword }) =>
  showPassword ? (
    <VisibilityOffIcon
      className={buildClass({ showIcon: true, password: true })}
      onClick={toggleShowPassword}
    />
  ) : (
    <VisibilityIcon
      className={buildClass({ showIcon: true, password: true })}
      onClick={toggleShowPassword}
    />
  );

const If = ({ condition, children }) => (condition ? children : null);

InputText.propTypes = {
  error: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputText.defaultProps = {
  error: '',
  label: '',
  onChange: () => {},
  type: 'text',
  value: '',
};

export default InputText;
