import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 5px;
  }

  @media only screen and (max-width: 769px) {
    font-style: ${({theme}) => theme.fontFamily.primary};
    font-weight: ${({theme}) => theme.fontWeight.regular};
    font-size: ${({theme}) => theme.fontSize.xs};
    line-height: ${({theme}) => theme.lineHeight.far};
    color: ${({theme}) => theme.brandColor.secondary.medium};

    & svg {
      font-size: ${({theme}) => theme.fontSize.sm};
    }
  }

  @media only screen and (min-width: 769px){
    font-style: ${({theme}) => theme.fontFamily.primary};
    font-weight: ${({theme}) => theme.fontWeight.regular};
    font-size: ${({theme}) => theme.fontSize.sm};
    line-height: ${({theme}) => theme.lineHeight.far};
    color: ${({theme}) => theme.brandColor.secondary.medium};

    & svg {
      font-size: ${({theme}) => theme.fontSize.sm};
    }
  }

  &.fail{
    color: ${({theme}) => theme.alarmColor.fail.medium}
  }
  &.success{
    color: ${({theme}) => theme.alarmColor.success.medium}
  }
  &.warning{
    color: ${({theme}) => theme.alarmColor.warning.medium}
  }

  ${({ customStyle }) => customStyle}
`;


