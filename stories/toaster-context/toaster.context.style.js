import styled from 'styled-components';

export const NotificationContainer = styled.div`
  display: grid;
  position: fixed;
  width: 400px;
  box-sizing: border-box;
  row-gap: 15px;


`;

export const Button = styled.div`
  width: 150px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 10px 10px;
  box-shadow: 0 0 1px ${({ theme }) => theme.neutralColor[3]};
  border-radius: 3px 3px 3px 3px;
  z-index: 999999;
  text-align: center;
  cursor: pointer;
  margin-bottom: 5px;

  color: ${({ theme }) => theme.neutralColor[8]};

  &:hover {
    box-shadow: 0 1 2px ${({ theme }) => theme.neutralColor[4]};
    opacity: 1;
  }

  &.primary{
    background-color: ${({ theme }) => theme.brandColor.secondary.darkest};
    color: ${({ theme }) => theme.neutralColor[2]};
  }

  &.secondary{
    background-color: ${({ theme }) => theme.brandColor.secondary.lightest};
  }

  &.success{
    background-color: ${({ theme }) => theme.alarmColor.success.medium};
  }

  &.fail{
    background-color: ${({ theme }) => theme.alarmColor.fail.medium};
  }

  &.warning{
    background-color: ${({ theme }) => theme.alarmColor.warning.dark};
  }
`;

