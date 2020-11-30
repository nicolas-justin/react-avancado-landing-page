import React from 'react';

/**
 * Types
 */
import { SectionTechProps } from 'types/api';

/**
 * Components
 */
import Heading from 'components/Heading';
import Container from 'components/Container';

/**
 * Utils
 */
import { getImageUrl } from 'utils/getImageUrl';

/**
 * Styles
 */
import * as S from './styles';

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons src={getImageUrl(icon.url)} alt={title} loading="lazy" />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
);

export default SectionTech;
