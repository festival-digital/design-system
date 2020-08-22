import styled from 'styled-components';

export const FilledButton = styled.button`
  ${(props) => `
    border-radius: ${props.theme.borderRadius.sm};
    background-color: ${props.theme.brandColor.primary.medium};
    padding: ${props.theme.spacingSquish.xs};
    color: ${props.theme.neutralColor[1]};
    cursor: pointer;
  `}
`;

export const OutlineButton = styled.button`
  ${(props) => `
    border-style: solid;
    border-color: ${props.theme.brandColor.primary.medium};
    border-width: ${props.theme.borderWidth.thin};
    background-color: transparent;
    border-radius: ${props.theme.borderRadius.sm};
    padding: ${props.theme.spacingSquish.xs};
    color: ${props.theme.brandColor.primary.medium};
    cursor: pointer;
  `}
`;
