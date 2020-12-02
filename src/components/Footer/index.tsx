import React from 'react';

/**
 * Types
 */
import { FooterProps } from 'types/api';

/**
 * Components
 */
import Container from 'components/Container';

/**
 * Styles
 */
import * as S from './styles';

const Footer = ({ description }: FooterProps) => (
  <S.Wrapper>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  </S.Wrapper>
);

export default Footer;
