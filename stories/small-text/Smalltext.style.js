import styled from 'styled-components';

export const SmalltextComponent = styled.p`

@media only screen and (max-width: 769px) {

    ${(props) => `
      font-style: ${props.theme.fontFamily.primary};
      font-weight: ${props.theme.fontWeight.regular};
      font-size: ${props.theme.fontSize.xxxs};
      line-height: ${props.theme.lineHeight.compact};
      color: ${props.theme.brandColor.secondary.medium};
    `}
  }

  @media only screen and (min-width: 769px){
    ${(props) => `
      font-style: ${props.theme.fontFamily.primary};
      font-weight: ${props.theme.fontWeight.regular};
      font-size: ${props.theme.fontSize.xxs};
      line-height: ${props.theme.lineHeight.compact};
      color: ${props.theme.brandColor.secondary.medium};
    `}}

    &.text-success{
      color: ${({theme}) => theme.alarmColor.success.medium};
    }

    &.text-fail{
      color: ${({theme}) => theme.alarmColor.fail.medium};
    }

    &.text-warning{
      color: ${({theme}) => theme.alarmColor.warning.medium};
    }

    ${({ customStyle }) => customStyle}
  `;
