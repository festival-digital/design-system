import styled from 'styled-components';

export const Text = styled.text`

@media only screen and (max-width: 769px) {
    
  ${(props) => `
    font-style: ${props.theme.fontFamily.primary};
    font-weight: ${props.theme.fontWeight.regular};
    font-size: ${props.theme.fontSize.xs};
    line-height: ${props.theme.lineHeight.compact};
    color: ${props.theme.brandColor.secondary.medium};
  `}}

@media only screen and (min-width: 769px){
  ${(props) => `
    font-style: ${props.theme.fontFamily.primary};
    font-weight: ${props.theme.fontWeight.regular};
    font-size: ${props.theme.fontSize.sm};
    line-height: ${props.theme.lineHeight.compact};
    color: ${props.theme.brandColor.secondary.medium};
  `}}
  




  

  
  
`;


