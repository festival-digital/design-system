import styled from 'styled-components';

export const NotificationContainer = styled.div`
  display: grid;
  position: fixed;
  width: 400px;
  box-sizing: border-box;
  row-gap: 15px;

  &.top-right {
    top: 12px;
    right: 12px;
  }

  &.bottom-right {
    bottom: 12px;
    right: 12px;
  }

  &.top-left {
    top: 12px;
    left: 12px;
  }

  &.bottom-left {
    bottom: 12px;
    left: 12px;
  }

`;

export const Notification = styled.div`
  transition: 0.3s ease;
  position: relative;
  display: grid;
  grid-template-columns: 45px auto 18px;
  grid-template-rows: 1fr;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 10px 10px;
  box-shadow: 0 0 10px ${({ theme }) => theme.neutralColor[3]};
  border-radius: 3px 3px 3px 3px;
  z-index: 999999;
  opacity: 1;
  color: ${({ theme }) => theme.neutralColor[8]};

  &:hover {
    box-shadow: 0 0 12px ${({ theme }) => theme.neutralColor[4]};
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

  &.top-right {
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 0.7s;
  }

  &.bottom-right {
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 0.7s;
  }

  &.top-left {
    transition: transform 0.6s ease-in;
    animation: toast-in-left 0.7s;
  }

  &.bottom-left {
    transition: transform 0.6 ease-in;
    animation: toast-in-left 0.7s;
  }

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes toast-in-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

`;


export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: transparent;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.5 ease-in;

    &:hover {
     /* animation: rotate180 0.5s; */
    }

    &.primary {
    color: ${({ theme }) => theme.neutralColor[2]};
    }

    &.success, &.fail, &.warning, &.info, &.secondary{
    color: ${({ theme }) => theme.neutralColor[8]};
    }

  }

  @keyframes rotate180 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

export const NotificationImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Messagebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & span:first-child {
    margin-bottom: 5px;
  }

  &.incomplete {
    flex-direction: row;
    align-items: center;

    & span:first-child {
      margin-bottom: 0;
    }
  }
`;

export const NotificationTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: left;
  margin-top: 0;
  height: ${({ theme }) => `calc(${theme.fontSize.sm} + 2px)`};
`;

export const NotificationMessage = styled.p`
  margin: 0;
  text-align: left;
  height: ${({ theme }) => `calc(${theme.fontSize.sm} + 2px)`};
  margin-left: -1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IDAIcon = styled.img`
  width: 32px;
  height: 32px;

`;
