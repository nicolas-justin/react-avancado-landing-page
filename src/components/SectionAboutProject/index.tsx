import React from 'react';

/**
 * Types
 */
import { SectionAboutProjectProps } from 'types/api';

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

const SectionAboutProject = ({
  title,
  description,
  image,
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(image.url)}
          alt={image.alternativeText}
          loading="lazy"
        />
        <div>
          <Heading reverseColor>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
);

export default SectionAboutProject;
