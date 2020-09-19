import styled from 'styled-components';

export const Smalltext = styled.p`
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
    `}
  }

  ${({ customStyle }) => customStyle}
`;
