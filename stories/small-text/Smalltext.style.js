import styled from 'styled-components';

<<<<<<< HEAD
export const Smalltext = styled.p`
  @media only screen and (max-width: 769px) {
=======
export const SmalltextComponent = styled.p`

@media only screen and (max-width: 769px) {

>>>>>>> cdb62a28faa514e9bd06d377e06fadec0f6f2e36
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
<<<<<<< HEAD
    `}
  }

  ${({ customStyle }) => customStyle}
`;
=======
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
  `;
>>>>>>> cdb62a28faa514e9bd06d377e06fadec0f6f2e36
