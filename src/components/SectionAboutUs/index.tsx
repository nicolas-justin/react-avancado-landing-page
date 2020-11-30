import React from 'react';

/**
 * Types
 */
import { SectionAboutUsProps } from 'types/api';

/**
 * Components
 */
import Heading from 'components/Heading';
import Container from 'components/Container';
import ProfileCard from 'components/ProfileCard';

/**
 * Temporary until bug fix
 * The 3.1.6+ versions of strapi are returning null in nested GraphQL request
 * @see https://github.com/strapi/strapi/issues/8610
 */
import content from './content';

/**
 * Styles
 */
import * as S from './styles';

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map(({ name, role, photo, description, socialLinks }, index) => (
        <ProfileCard
          key={index}
          name={name}
          role={role}
          photo={photo}
          socialLinks={socialLinks || content[index]}
          description={description}
        />
      ))}
    </S.Content>
  </Container>
);

export default SectionAboutUs;
