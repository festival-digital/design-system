import styled from 'styled-components';

export const InputGroup = styled.form`
  display: block;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  ${({ theme }) => `
    position: absolute;
    opacity: 0;

    & + label {
      position: relative;
      cursor: pointer;
      font-family: ${theme.fontFamily.primary};
      font-size: ${theme.fontSize.xs};
      color: ${theme.neutralColor[1]};
      font-weight: ${theme.fontWeight.regular};
    }

    &:hover + label:before {
      background: #525252;
      box-shadow: 0 0 0 2px #525252;
    }

    & + label:before {
      content: '';
      background: transparent;
      border-radius: ${theme.borderRadius.xs};
      border-style: solid;
      border-color: ${theme.neutralColor[1]};
      border-width: ${theme.borderWidth.thin};
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      width: 24px;
      height: 24px;
      margin-right: ${theme.spacingInline.nano};
    }

    &:checked + label:before {
      background: ${theme.brandColor.primary.medium};
      border-color: ${theme.brandColor.primary.medium};
      box-shadow: 0 0 0;
    }
  `}
`;
