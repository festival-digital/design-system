import styled from 'styled-components';

export const Title = styled.h1`
  ${(props) => `
    font-style: ${props.theme.fontFamily.secondary};
    font-weight: ${props.theme.fontWeight.bold};
    font-size: ${props.theme.fontSize.xl};
    line-height: ${props.theme.lineHeight.near};
    color: ${props.theme.brandColor.secondary.medium};
  `}
`;  
