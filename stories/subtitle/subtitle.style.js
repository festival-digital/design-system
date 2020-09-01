import styled from 'styled-components';

export const Subtitle = styled.h2`
  ${(props) => `
    font-style: ${props.theme.fontFamily.primary};
    font-weight: ${props.theme.fontWeight.bold};
    font-size: ${props.theme.fontSize.lg};
    line-height: ${props.theme.lineHeight.far};
    color: ${props.theme.brandColor.secondary.medium};
  `}
`;  

export const SubtitleSmall = styled.h3`
  ${(props) => `
    font-style: ${props.theme.fontFamily.primary};
    font-weight: ${props.theme.fontWeight.bold};
    font-size: ${props.theme.fontSize.sm};
    line-height: ${props.theme.lineHeight.far};
    color: ${props.theme.brandColor.secondary.medium};
  `}
`;  

