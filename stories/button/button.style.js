import styled from 'styled-components';

export const FilledButton = styled.button`
  ${(props) => `
    background-color: ${props.theme.brandColor.primary.medium};
  `}
`;
