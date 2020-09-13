import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(60, 100));
  grid-gap: 10px;


`;

export const MessageBox = styled.div`
  color: ${({theme}) => theme.alarmColor.fail.medium};
  font-size: ${({theme}) => theme.fontSize.xs};

`;

export const InputBase = styled.input`

  width: 60px;
  height: 60px;

  border: 2px solid red;
`;
