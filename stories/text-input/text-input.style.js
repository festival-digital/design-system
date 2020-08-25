import styled from 'styled-components';

export const InputGroup = styled.div`
  width: 100%;
  height: 48px;
  position: relative;
`;

export const InputTextStyle = styled.input`
  height: 48px;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.neutralColor[5]};
  padding: ${({ theme }) => theme.spacingSquish.xxs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border-width: ${({ theme }) => theme.borderWidth.thin};
  border-style: solid;
  border-color: ${({ theme }) => theme.neutralColor[5]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  &:focus {
    color: ${({ theme }) => theme.neutralColor[1]};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    padding: ${({ theme }) => theme.spacingSquish.xxs};
    border-width: ${({ theme }) => theme.borderWidth.thin};
    border-style: solid;
    border-color: ${({ theme }) => theme.neutralColor[1]};
  }

  &:focus + label,
  &.hasValue + label {
    color: ${({ theme }) => theme.neutralColor[1]};
    font-size: ${({ theme }) => theme.fontSize.xs};
    top: -11px;
    left: 13px;
    padding: 1px 3px;
    background-color: #1d1d1d;
  }

  &.hasValue:not(:focus) + label {
    color: ${({ theme }) => theme.neutralColor[5]};
  }
`;

export const LabelStyle = styled.label`
  color: ${({ theme }) => theme.neutralColor[5]};
  position: absolute;
  top: 14px;
  left: 16px;
  transition: all 0.2s ease-out;
`;
