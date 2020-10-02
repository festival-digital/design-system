import styled from 'styled-components';

export const UnderlineButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.xxxs : theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme, white }) =>
    white ? theme.neutralColor[1] : theme.brandColor.primary.medium};
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: underline;

  ${({ customStyle }) => customStyle}
`;

export const ArrowButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.xs : theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme, white }) =>
    white ? theme.neutralColor[1] : theme.brandColor.primary.medium};
  border: none;
  background-color: transparent;
  cursor: pointer;

  ${({ customStyle }) => customStyle}
`;
