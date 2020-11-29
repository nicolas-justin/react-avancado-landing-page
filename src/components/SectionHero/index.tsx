import React from 'react';

/**
 * Types
 */
import { LogoProps } from 'types/api';

/**
 * Components
 */
import Logo from 'components/Logo';
import Button from 'components/Button';
import Container from 'components/Container';

/**
 * Utils
 */
import { gaEvent } from 'utils/ga';

/**
 * Styles
 */
import * as S from './styles';

type Props = {
  logo: LogoProps;
};

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' });

const SectionHero = ({ logo }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.HugeTitle>Black Friday</S.HugeTitle>
          <S.Title>React Avançado</S.Title>
          <S.Description>
            Crie aplicações reais com NextJS, Strapi, GraphQL e mais!
          </S.Description>
          <S.ButtonWrapper>
            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=BLACKFRIDAY"
              onClick={onClick}
              wide
            >
              Comprar
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src="/img/hero-illustration.svg"
          alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
);

export default SectionHero;
