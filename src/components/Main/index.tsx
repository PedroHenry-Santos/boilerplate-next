import Illustrate from '../../assets/images/setup.svg';
import * as S from './styles';

export const Main = ({
  title = 'Boilerplate NextJS',
  description = 'NextJS, React, Typescript, styled-components'
}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.illustrate>
        <Illustrate alt="Imagem de vários componentes apresentados em tela, de fundo um circulo tracejado" />
      </S.illustrate>
    </S.Wrapper>
  );
};
