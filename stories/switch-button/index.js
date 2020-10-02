import React from 'react';
import PropTypes from 'prop-types';
import { SwitchButtonWrapper, SwitchButtonOption } from './switchButton.style';

/**
 * This function get the button position
 * @param {number} index position list number
 * @param {func} listLength list items total number 
 * @returns {string} position reference 
 */
const getPosition = (index, listLength) => {
  if (index === 0) return 'first';
  if (index === listLength - 1) return 'last';
  return 'default';
};

/**
 * This is the SwitchButton component
 * @param {array} options option list data
 * @param {func} onClick action to select option
 * @returns {array} contains the React.Component list 
 */
const renderOptions = ({
  options, onClick, selectedIndex, small,
}) => options.map((option, index) => (
  <SwitchButtonOption
    key={option.id}
    type="button"
    onClick={() => { onClick({ id: option.id, index }) }}
    small={small}
    actived={selectedIndex === index}
    position={getPosition(index, options.length)}
  >
    {option.label}
  </SwitchButtonOption>
)); 

/**
 * This is the SwitchButton component
 * @param {func} onClick action to select option
 * @param {array} options option list
 * @param {object} props proptypes to be pass to the component
 * @returns {React.Component}
 */
const SwitchButton = ({
  onClick, options, selectedIndex, small,
  ...props
}) => (
  <SwitchButtonWrapper {...props}>
    {
      renderOptions({
        options,
        onClick,
        selectedIndex,
        small,
      })
    }
  </SwitchButtonWrapper>
);

SwitchButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  selectedIndex: PropTypes.number,
  onClick: PropTypes.func,
};

SwitchButton.defaultProps = {
  selectedIndex: 0,
  options: [{ id: 'email', label: 'E-mail' }, { id: 'phone', label: 'Celular' }],
  onClick: () => console.warn('Warning! Action not implemented.'),
};

export default SwitchButton;
