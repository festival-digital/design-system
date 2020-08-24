import React from 'react';
import PropTypes from 'prop-types';
import {
  WhiteButton, DarkButton, Icon,
} from './IDARegisterButton.style';

const BASE_ICON_URI = "http://ida-design-system-assets.s3-us-west-2.amazonaws.com/icons";
const ALT_ICON_TEXT = "Essa é a Logo da Identidade Digital Ativista, a logo é sigla da marca onde cada letra é de uma cor especifica (a letra I é verde, a letra D é vermelha e a A é roxo) e formam formas geométricas.";

/**
 * This is the IDARegisterButton component 
 * @param {object} args proptypes to be pass to the component 
 * @param {boolean} args.small flag for indentify if your components is small or large
 * @param {boolean} args.dark flag for indentify if your components is defaut mode or dark mode
 * @returns {React.Component}
 */
const IDARegisterButton = (props) => {
  if (props.dark) {
    return (
      <DarkButton {...props}>
        <Icon
          src={`${BASE_ICON_URI}/brand.svg`}
          alt={ALT_ICON_TEXT}
          small={props.small}
        />
        Cadastre-se
      </DarkButton>
    );
  }

  return (
    <WhiteButton {...props}>
       <Icon
          src={`${BASE_ICON_URI}/brand.svg`}
          alt={ALT_ICON_TEXT}
          small={props.small}
        />
        Cadastre-se
    </WhiteButton>
  );
};

IDARegisterButton.propTypes = {
  outline: PropTypes.bool,
  small: PropTypes.bool,
};

IDARegisterButton.defaultProps = {
  dark: false,
  small: false,
};

export default IDARegisterButton;
