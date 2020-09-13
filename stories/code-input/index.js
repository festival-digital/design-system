import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  InputGroup,
  InputBase,
  MessageBox
} from './code-input.style';

import IdGenerator from '../../util/IdGenerator';
import buildClass from '../../util/buildClass';



const CodeInput = ({ error, id, label, onChange, type, value, ...props }) => {
  const codeSize = 4;
  const [inputs,setInput] = useState(Array.apply('', Array(4)));

useEffect( () => {
  const a = new IdGenerator();
  console.log(inputs);
  console.log('id',IdGenerator.new());

}, []);

  return (
   <Container>
      <InputGroup>
      {
        inputs.map( (input) => <InputBase key={23}/>)
      }

    </InputGroup>
    <MessageBox>possui erro</MessageBox>
   </Container>
  );
};


const If = ({ condition, children }) => (condition ? children : null);

CodeInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeInput.defaultProps = {
  error: '',
  label: '',
  onChange: () => {},
  value: '',
};

export default CodeInput;
