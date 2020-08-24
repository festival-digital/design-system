import styled from 'styled-components';

export const FilledButton = styled.button`
  ${(props) => `
    font-family: ${props.theme.fontFamily.primary};
    font-style: normal;
    font-size: ${props.small ? props.theme.fontSize.xs : props.theme.fontSize.sm};
    font-weight: ${props.theme.fontWeight.medium};
    color: ${props.theme.brandColor.secondary.darkest};
    border-style: solid;
    border-color: ${props.theme.neutralColor[1]};
    border-width: ${props.theme.borderWidth.thin};
    border-radius: ${props.theme.borderRadius.sm};
    background-color: ${props.theme.neutralColor[1]};
    padding: ${props.theme.spacingSquish.xs};
    cursor: pointer;

    &:disabled {
      color: ${props.theme.neutralColor[1]};
      border-color: ${props.theme.neutralColor[5]};
      background-color: ${props.theme.neutralColor[5]};
      cursor: not-allowed;
    }
  `}
`;

export const OutlineButton = styled.button`
  ${(props) => `
    font-family: ${props.theme.fontFamily.primary};
    font-style: normal;
    font-size: ${props.small ? props.theme.fontSize.xs : props.theme.fontSize.sm};
    font-weight: ${props.theme.fontWeight.medium};
    color: ${props.theme.neutralColor[1]};
    border-style: solid;
    border-color: ${props.theme.neutralColor[1]};
    border-width: ${props.theme.borderWidth.thin};
    background-color: transparent;
    border-radius: ${props.theme.borderRadius.sm};
    padding: ${props.theme.spacingSquish.xs};
    cursor: pointer;

    &:hover:enabled {
      color: ${props.theme.brandColor.secondary.darkest};
      background-color: ${props.theme.neutralColor[1]};    
    }

    &:disabled {
      color: ${props.theme.neutralColor[5]};
      border-color: ${props.theme.neutralColor[5]};
      cursor: not-allowed;
    }
  `}
`;
