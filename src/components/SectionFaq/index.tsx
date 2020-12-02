import React from 'react';

/**
 * Types
 */
import { SectionFaqProps } from 'types/api';

/**
 * Components
 */
import Container from 'components/Container';
import Heading from 'components/Heading';

/**
 * Styles
 */
import * as S from './styles';

const SectionFaq = ({ title, questions }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading reverseColor>{title}</Heading>

        <S.Questions>
          {questions.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom reverseColor>
                {question}
              </Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom reverseColor>
            Eu tenho outra dúvida!
          </Heading>
          <p>
            Sem problemas! Você pode acessar qualquer uma das{' '}
            <a
              href="https://willianjusten.com.br/about"
              target="_blank"
              rel="noreferrer"
            >
              minhas redes sociais
            </a>{' '}
            ou entrar no{' '}
            <a
              href="https://willianjusten-cursos.slack.com/join/shared_invite/zt-g20h37hj-GnSb_y7PXCRjS92N9T8LCQ#/"
              target="_blank"
              rel="noreferrer"
            >
              slack do nosso curso.
            </a>
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
);

export default SectionFaq;
