import styled from 'styled-components';

export const IconWrapper = styled.div`
  ${(props) => `
    display: inline-block;
    margin-bottom: ${props.theme.spacingInline.nano};
  `}
`;

export const Button = styled.button`
  ${(props) => `
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: ${props.theme.fontFamily.primary};
    font-style: normal;
    font-size: ${props.theme.fontSize.md};
    font-weight: ${props.theme.fontWeight.medium};
    color: ${props.theme.neutralColor[1]};
    border-style: solid;
    border-color: ${props.theme.neutralColor[1]};
    border-width: ${props.theme.borderWidth.thin};
    border-radius: ${props.theme.borderRadius.sm};
    background-color: transparent;
    padding: ${
      props.small
        ? props.theme.spacingSquish.xs
        : props.theme.spacingSquish.md
    };
    cursor: pointer;

    &:hover {
      color: ${props.theme.brandColor.secondary.darkest};
      background-color: ${props.theme.neutralColor[1]};

      & > div > span {
        color: ${props.theme.brandColor.secondary.darkest};
      } 
    }
  `}
`;
