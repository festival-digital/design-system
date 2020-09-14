import styled from 'styled-components';

export const FilledButton = styled.button`
  ${(props) => `
    font-family: ${props.theme.fontFamily.primary};
    font-style: normal;
    font-size: ${
      props.small ? props.theme.fontSize.xs : props.theme.fontSize.sm
    };
    font-weight: ${props.theme.fontWeight.medium};
    color: ${
      props.white
        ? props.theme.brandColor.secondary.darkest
        : props.theme.neutralColor[1]
    };
    border-style: solid;
    border-color: ${
      props.white
        ? props.theme.neutralColor[1]
        : props.theme.brandColor.primary.medium
    };
    border-width: ${props.theme.borderWidth.thin};
    border-radius: ${props.theme.borderRadius.sm};
    background-color: ${
      props.white
        ? props.theme.neutralColor[1]
        : props.theme.brandColor.primary.medium
    };
    padding: ${
      props.small
        ? props.theme.spacingSquish.nano
        : props.theme.spacingSquish.xs
    };
    cursor: pointer;

    &:disabled {
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
    font-size: ${
      props.small ? props.theme.fontSize.xs : props.theme.fontSize.sm
    };
    font-weight: ${props.theme.fontWeight.medium};
    color: ${
      props.white
        ? props.theme.neutralColor[1]
        : props.theme.brandColor.primary.medium
    };
    border-style: solid;
    border-color: ${
      props.white
        ? props.theme.neutralColor[1]
        : props.theme.brandColor.primary.medium
    };
    border-width: ${props.theme.borderWidth.thin};
    background-color: transparent;
    border-radius: ${props.theme.borderRadius.sm};
    padding: ${
      props.small
        ? props.theme.spacingSquish.nano
        : props.theme.spacingSquish.xs
    };
    cursor: pointer;
    
    &:hover:enabled {
      color: ${
        props.white
          ? props.theme.brandColor.secondary.darkest
          : props.theme.neutralColor[1]
      };
      background-color: ${
        props.white
          ? props.theme.neutralColor[1]
          : props.theme.brandColor.primary.medium
      }; 
    }

    &:disabled {
      color: ${props.theme.neutralColor[5]};
      border-color: ${props.theme.neutralColor[5]};
      cursor: not-allowed;
    }
  `}
`;
