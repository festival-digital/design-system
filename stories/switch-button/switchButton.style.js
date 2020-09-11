import styled from 'styled-components';

export const SwitchButtonWrapper = styled.div`
  ${(props) => `
    display: inline-flex;
    border-style: solid;
    border-color: ${props.theme.brandColor.primary.medium};
    border-width: ${props.theme.borderWidth.thin}; 
    border-radius: ${props.theme.borderRadius.sm};
    overflow: hidden;
  `}
`;

const getBorderRadiusByPosittion = (position, radius) => {
  const positions = {
    first: `0 ${radius} ${radius} 0`,
    last: `${radius} 0 0 ${radius}`,
    default: radius,
  };

  return positions[position]
};

export const SwitchButtonOption = styled.button`
  ${(props) => `
    width: 50%;
    min-width: ${props.small ? '101px' : '170px'};
    padding: ${props.theme.spacingSquish.xs};
    border-color: ${props.actived ? props.theme.brandColor.primary.medium : 'transparent'};
    border-width: ${props.theme.borderWidth.thin}; 
    border-radius: ${getBorderRadiusByPosittion(props.position, props.theme.borderRadius.sm)}; 
    background-color: ${props.actived ? props.theme.brandColor.primary.medium : 'transparent'};
    color: ${props.theme.neutralColor[1]};
    font-family: ${props.theme.fontFamily.primary};
    font-style: normal;
    font-size: ${props.small ? props.theme.fontSize.xxxs : props.theme.fontSize.sm};
    font-weight: ${props.theme.fontWeight.medium};
    cursor: pointer;
  `}
`;
