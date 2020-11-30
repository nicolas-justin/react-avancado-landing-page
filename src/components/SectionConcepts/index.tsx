import React from 'react';

/**
 * Types
 */
import { SectionConceptsProps } from 'types/api';

/**
 * Components
 */
import Container from 'components/Container';
import Heading from 'components/Heading';

/**
 * Styles
 */
import * as S from './styles';

const SectionConcepts = ({ title, concepts }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom reverseColor>
        {title}
      </Heading>
      <S.List>
        {concepts.map(({ title }) => (
          <S.Item key={title}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
);

export default SectionConcepts;
