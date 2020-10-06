import React from 'react';
import PropTypes from 'prop-types';
import { WhiteButton, DarkButton, Icon } from './IDARegisterButton.style';

const BASE_ICON_URI =
  'http://ida-design-system-assets.s3-us-west-2.amazonaws.com/icons';
const ALT_ICON_TEXT =
  'Essa é a Logo da Identidade Digital Ativista, a logo é sigla da marca onde cada letra é de uma cor especifica (a letra I é verde, a letra D é vermelha e a A é roxo) e formam formas geométricas.';

/**
 * This is the IDARegisterButton component
 * @param {object} args proptypes to be pass to the component
 * @param {boolean} args.small flag for indentify if the component is small or large
 * @param {boolean} args.dark flag for indentify if the component is defaut mode or dark mode
 * @returns {React.Component}
 */
const IDARegisterButton = ({ dark, small, text,  ...props }) => {
  if (dark) {
    return (
      <DarkButton {...props}>
        <Icon
          src={`${BASE_ICON_URI}/brand.svg`}
          alt={ALT_ICON_TEXT}
          small={small}
        />
        {text ? text : 'Cadastre-se'}
      </DarkButton>
    );
  }

  return (
    <WhiteButton {...props}>
      <Icon
        src={`${BASE_ICON_URI}/brand.svg`}
        alt={ALT_ICON_TEXT}
        small={small}
      />
      {text ? text : 'Cadastre-se'}
    </WhiteButton>
  );
};

IDARegisterButton.propTypes = {
  dark: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.string,
};

IDARegisterButton.defaultProps = {
  dark: false,
  small: false,
};

export default IDARegisterButton;
