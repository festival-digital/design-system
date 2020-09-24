import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Animated,

} from './animation.style';

import { enhancedCodeGenerator } from '../../util/codeGenerator';
import buildClass from '../../util/buildClass';



const Animation = ({children, ...props }) => {

  return (
    <Container>
      <Animated {...props}>
        {children}
      </Animated>
    </Container>
  );
};

Animation.propTypes = {
  animation: PropTypes.oneOf(['slideInUp','slideInRight','slideInDown','slideInLeft','slideOutUp','slideOutRight',
  'slideOutDown','slideOutLeft']),
  delay: PropTypes.string,
  duration: PropTypes.string,

};

Animation.defaultProps = {
  animation: 'slideInRight',
  delay: '0s',
  duration: '1s',
};


export default Animation;
