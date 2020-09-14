import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  InputGroup,
  InputBox,
  InputBase,
  MessageBox
} from './code-input.style';

import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

import { enhancedCodeGenerator } from '../../util/codeGenerator';
import buildClass from '../../util/buildClass';



const CodeInput = ({ codeSize, error, id, onChange, type, value, ...props }) => {
  const [inputId, setInputId] = useState(Array.apply(null, Array(codeSize)).map(() => enhancedCodeGenerator()));
  const [inputArray, setinputArray] = useState(Array.apply(null, Array(codeSize)).map(() => ''));

  const hasSpaceToAdd = (value, newArray) => {
    const filteredArray = newArray.filter((item) => item.length !== 0);
    const arrayToAppend = value.split('');
    return (filteredArray.length + arrayToAppend.length - 1) <= codeSize;
  }

  const removeFromArray = (index, array) => {
    // altera o array e retorna o array alterado
    array.splice(index, 1)
    array.push('')
    return array;
  }

  const addToArray = (index, array, value,) => {
    // altera o array e retorna o array alterado
    array.splice(index, 1, ...value)
    return array;
  }

  const getNewArray = (index, value) => {
    let newArray = [...inputArray];
    if (value.length === 0) newArray = removeFromArray(index, newArray)
    else {
      const arrayToAppend = value.split('');
      if (hasSpaceToAdd(value, newArray)) addToArray(index, newArray, arrayToAppend)
    }

    return [...newArray];
  }

  const setInputFocus = (index, value, currentArray) => {
    let identifier = '';
    if (value.length === 0) {
      // se foi uma remoção voltar um input
      const newIndex = index === (0) ? index : index - 1;
      identifier = inputId[newIndex];
    } else {
      // se foi uma adição avançar um input
      const newIndex = index === (codeSize - 1) ? index : index + 1;
      identifier = inputId[newIndex];
    }

    // definir o focus no input escolhido anteriormente
    if (hasSpaceToAdd(value, currentArray)) {
      const input = document.getElementById(identifier);
      input.focus();
      input.setSelectionRange(1, 1);
    }

  }

  const handleChange = (event) => {
    const value = event.target.value;
    const identifier = event.target.dataset.identifier;
    const index = inputId.indexOf(identifier);
    let newArray = getNewArray(index, value);


    setInputFocus(index, value, [...inputArray]);
    setinputArray(newArray.filter((_, index) => index <= (codeSize - 1)));
    onChange(newArray.join(''));
  }

  const hasError = (string) => string.length > 0 ? true : false;
  const isFilled = (array) => array.filter((item) => item.length !== 0).length === codeSize ? true : false;

  return (
    <Container {...props}>
      <InputGroup codeSize={codeSize}>
        {
          inputId.map((item, index) => {
            return (
              <InputBox key={item} className={buildClass({ fail: hasError(error), filled: isFilled(inputArray) })}>
                <InputBase
                  id={item}
                  data-identifier={item}
                  value={inputArray[index]}
                  onChange={handleChange}
                />
              </InputBox>
            )
          })
        }
      </InputGroup >
      <MessageBox>
        <ErrorOutlineOutlinedIcon className={buildClass({ fail: hasError(error) })} />
        <span>{error}</span>
      </MessageBox>
    </Container>
  );
};

CodeInput.propTypes = {
  codeSize: PropTypes.number,
  error: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeInput.defaultProps = {
  codeSize: 4,
  error: '',
  onChange: () => { },
  value: '',
};

export default CodeInput;
