import React from 'react';

/**
 * Types
 */
import { SectionModulesProps } from 'types/api';

/**
 * Components
 */
import Heading from 'components/Heading';
import Container from 'components/Container';
import CardModule from 'components/CardModule';

/**
 * Styles
 */
import * as S from './styles';

const SectionModules = ({ title, modules }: SectionModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
);

export default SectionModules;
