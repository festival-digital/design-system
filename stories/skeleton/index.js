import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,

} from './skeleton.style';

import { enhancedCodeGenerator } from '../../util/codeGenerator';
import buildClass from '../../util/buildClass';



const Skeleton = ({animation, variant, ...props }) => {

  return (
    <Container {...props} className={`${variant} ${animation}`} variant={variant} animation={animation} />
  );
};

Skeleton.propTypes = {
  backgroundColor: PropTypes.string,
  effectColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  variant: PropTypes.oneOf(['circle','rect','text']),
  animation: PropTypes.oneOf(['wave', 'pulse']),
};

Skeleton.defaultProps = {
  height: '18px',
  width: '100%',
  variant: 'rect',
  animation: 'wave',
};


export default Skeleton;
