import styled from 'styled-components';

export const UnderlineButton = styled.button`
  ${({ theme, small, white }) => `
    font-family: ${theme.fontFamily.primary};
    font-style: normal;
    font-size: ${small ? theme.fontSize.xxxs : theme.fontSize.xs};
    font-weight: ${theme.fontWeight.medium};
    color: ${white ? theme.neutralColor[1] : theme.brandColor.primary.medium};
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    }
  `}
`;

export const ArrowButton = styled.button`
  ${({ theme, small, white }) => `
    font-family: ${theme.fontFamily.primary};
    font-style: normal;
    font-size: ${small ? theme.fontSize.xs : theme.fontSize.sm};
    font-weight: ${theme.fontWeight.medium};
    color: ${white ? theme.neutralColor[1] : theme.brandColor.primary.medium};
    border: none;
    background-color: transparent;
    cursor: pointer;
    }
  `}
`;
