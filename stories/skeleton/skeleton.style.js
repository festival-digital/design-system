import styled from 'styled-components';

export const Container = styled.span`
  width: ${({width}) => width };
  position: relative;
  background-color: ${({theme, backgroundColor}) => backgroundColor || '#333'};
  height: ${({height}) => height };
  display: block;
  margin-bottom: 10px;

  &.rect {
    border-radius: ${({theme}) => theme.borderRadius.xs};
  }

  &.circle {
    border-radius: ${({theme}) => theme.borderRadius.circular};
  }

  &.text {
    height: ${({theme}) => theme.fontSize.sm};
    transform: scale(1, 0.60);
    margin-top: 0;
    border-radius: 4px;
    margin-bottom: 0;
    transform-origin: 0 60%;
    line-height: 16px;
  }


  &.wave {
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      animation: wave 1.6s linear 0.5s infinite;
      transform: translate(-100%);
      background: ${({theme, effectColor}) => `linear-gradient(90deg, transparent, ${ effectColor || `#4a4a4a`}, transparent)`};
    }
  }

  &.pulse {
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      animation: pulse 1.5s ease-in-out 0.5s infinite;
      background:  ${({theme, effectColor}) => effectColor || `#4a4a4a`};
    }
  }



  @keyframes wave{
    0% {transform: translateX(-100%);}
    100% {transform: translateX(100%);}
  }

  @keyframes pulse{
    0% {opacity: 1;}
    50% {opacity: 0.4;}
    100% {opacity: 1;}
  }
`;
