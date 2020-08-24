import styled from 'styled-components';

export const Icon = styled.img`
  ${(props) => `
    width: 32px;
    height: 32px;
    margin-right: ${props.small ? props.theme.spacingInline.nano : props.theme.spacingInline.xxxs};
    vertical-align: middle;
  `}
`;

export const WhiteButton = styled.button`
  ${(props) => `
    font-family: ${props.theme.fontFamily.primary};
    font-style: normal;
    font-size: ${props.small ? props.theme.fontSize.xs : props.theme.fontSize.sm};
    font-weight: ${props.theme.fontWeight.medium};
    color: ${props.theme.neutralColor[1]};
    border-style: solid;
    border-color: ${props.theme.neutralColor[1]};
    border-width: ${props.theme.borderWidth.thin};
    border-radius: ${props.theme.borderRadius.sm};
    background-color: transparent;
    padding: ${props.small ? props.theme.spacingSquish.nano : props.theme.spacingSquish.xs};
    cursor: pointer;
  `}
`;

export const DarkButton = styled.button`
  ${(props) => `
    font-family: ${props.theme.fontFamily.primary};
    font-style: normal;
    font-size: ${props.small ? props.theme.fontSize.xs : props.theme.fontSize.sm};
    font-weight: ${props.theme.fontWeight.medium};
    color: ${props.theme.brandColor.secondary.darkest};
    border-style: solid;
    border-color: ${props.theme.brandColor.secondary.darkest};
    border-width: ${props.theme.borderWidth.thin};
    border-radius: ${props.theme.borderRadius.sm};
    background-color: transparent;
    padding: ${props.small ? props.theme.spacingSquish.nano : props.theme.spacingSquish.xs};
    cursor: pointer;
  `}
`;
