import React from 'react';
import PropTypes from 'prop-types';
import {
  WhiteButton, DarkButton, Icon,
} from './IDARegisterButton.style';

const BASE_ICON_URI = "http://ida-design-system-assets.s3-us-west-2.amazonaws.com/icons";
const ALT_ICON_TEXT = "Essa é a Logo da Identidade Digital Ativista, a logo é sigla da marca onde cada letra é de uma cor especifica (a letra I é verde, a letra D é vermelha e a A é roxo) e formam formas geométricas.";

const IDARegisterButton = (props) => {
  if (props.dark) {
    return (
      <DarkButton {...props}>
        <Icon
          src={`${BASE_ICON_URI}/brand.svg`}
          alt={ALT_ICON_TEXT}
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
        />
        Cadastre-se
    </WhiteButton>
  );
};

IDARegisterButton.propTypes = {
  outline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

IDARegisterButton.defaultProps = {
  outline: false,
};

export default IDARegisterButton;
