import styled from 'styled-components';

const getUnit = (string) => string.replace(/\d+/g,'');
const getValue = (string) => string.replace(/\D/g, '');;
const getHalfValue = (string) => {
  const value = getValue(string) / 2;
  const unit = getUnit(string);
  return `${value}${unit}`;
}

export const FilledButton = styled.button`
  ${(props) => `
    position: relative;


    & span {
      visibility: ${props.isLoading ? `hidden` : `visible`};
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
    }

    border-style: solid;
    border-color: ${
      props.white
        ? props.theme.neutralColor[1]
        : (
          props.isLoading ? props.theme.brandColor.primary.darkest : props.theme.brandColor.primary.medium
        )
    };
    border-width: ${props.theme.borderWidth.thin};
    border-radius: ${props.theme.borderRadius.sm};
    background-color: ${
      props.white
        ? props.theme.neutralColor[1]
        : (
          props.isLoading ? props.theme.brandColor.primary.darkest : props.theme.brandColor.primary.medium
        )
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

  ${({ customStyle }) => customStyle}
`;

export const OutlineButton = styled.button`
  ${(props) => `
    position: relative;
    & span {
      visibility: ${props.isLoading ? `hidden` : `visible`};
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
    }
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
<<<<<<< HEAD
      }; 
=======
      };
>>>>>>> cdb62a28faa514e9bd06d377e06fadec0f6f2e36
    }

    &:disabled {
      color: ${props.theme.neutralColor[5]};
      border-color: ${props.theme.neutralColor[5]};
      cursor: not-allowed;
    }
  `}

  ${({ customStyle }) => customStyle}
`;

export const Loader = styled.div`
  display: ${({isLoading}) => isLoading ? `block`: `none`};
  width: ${({theme, small}) => small ? theme.fontSize.xs : theme.fontSize.sm };
  height: ${({theme, small}) => small ? theme.fontSize.xs : theme.fontSize.sm };
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  border-color: ${({theme}) => theme.neutralColor[2]};
  border-top-color: ${({theme}) => theme.alarmColor.success.medium};
  animation: spin 1.5s linear infinite;

  position: absolute;
  top: ${({small, theme}) => `calc(50% - ${getHalfValue(small ? theme.fontSize.xs : theme.fontSize.sm)})`};
  left: ${({small, theme}) => `calc(50% - ${getHalfValue(small ? theme.fontSize.xs : theme.fontSize.sm)})`};

  @keyframes spin{
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }


`



