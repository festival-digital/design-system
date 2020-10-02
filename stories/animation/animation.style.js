import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: auto;
  width: auto;
  overflow: hidden;
`;

export const Animated = styled.div`
  position: relative;
  height: auto;
  width: auto;
  animation-name: ${({animation}) => animation };;
  animation-duration: ${({duration}) => duration };
  animation-delay: ${({delay}) => delay };
  animation-fill-mode: both;
  transition: transform 0.6s ease-in;
  box-sizing: border-box;

  @keyframes slideInUp{
    0% {
      -webkit-transform: translate3d(0,100%,0);
      transform: translate3d(0,100%,0);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }

  @keyframes slideInRight{
    0% {
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }
  @keyframes slideInDown{
    0% {
    -webkit-transform: translate3d(0,-100%,0);
    transform: translate3d(0,-100%,0);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    }
  }

  @keyframes slideInLeft{
    0% {
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }

  @keyframes slideOutUp {
    100% {
      visibility: hidden;
      -webkit-transform: translate3d(0,-100%,0);
      transform: translate3d(0,-100%,0);
    }
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }

  @keyframes slideOutRight{
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    100% {
      visibility: hidden;
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0);
    }
  }

  @keyframes slideOutDown {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    100% {
      visibility: hidden;
      -webkit-transform: translate3d(0,100%,0);
      transform: translate3d(0,100%,0);
    }
  }

  @keyframes slideOutLeft{
    0% {
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }



`;
