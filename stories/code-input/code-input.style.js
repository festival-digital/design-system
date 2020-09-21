import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: ${({codeSize}) => `repeat(${codeSize}, 1fr)`};
  /* grid-template-columns: ${({codeSize}) => `repeat(${codeSize}, minmax(64px, 100px))`}; */
  /* grid-gap: 10px; */
  justify-content: center;
  justify-items: center;

`;

export const MessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacingStack.xxxs};
  text-align: center;
  color: ${({ theme }) => theme.alarmColor.fail.medium};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.regular};


  & svg {
    width: 24px;
    height: 24px;
    margin-right: 4px;
    visibility: hidden;

    &.fail{
      visibility: visible;
    }
  }
`;

export const InputBox = styled.div`
  width: 48px;
  height: 48px;

  border-width: ${({ theme }) => theme.borderWidth.thin};
  border-style: solid;
  border-color: ${({ theme }) => theme.neutralColor[5]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.neutralColor[1]};

    & input {
      color: ${({ theme }) => theme.neutralColor[1]};
    }

  }

  &.filled{
    border-color: ${({ theme }) => theme.neutralColor[1]};

      & input {
        color: ${({ theme }) => theme.neutralColor[1]};
      }

  }

  &.fail{
    border-color: ${({ theme }) => theme.alarmColor.fail.medium};
  }

`;

export const InputBase = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacingInset.xxs};
  text-align: center;
  color: ${({ theme }) => theme.neutralColor[5]};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

`;
