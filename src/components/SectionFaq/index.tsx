import React from 'react';

/**
 * Types
 */
import { SectionFaqProps, ExtraQuestionProps } from 'types/api';

/**
 * Components
 */
import Container from 'components/Container';
import Heading from 'components/Heading';

/**
 * Styles
 */
import * as S from './styles';

type Props = {
  sectionFaq: SectionFaqProps;
  extraQuestion: ExtraQuestionProps;
};

const SectionFaq = ({ sectionFaq, extraQuestion }: Props) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{sectionFaq.title}</Heading>

        <S.Questions>
          {sectionFaq.questions.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        {!extraQuestion.hidden && (
          <S.ExtraQuestion>
            <Heading lineBottom>{extraQuestion.question}</Heading>
            <div dangerouslySetInnerHTML={{ __html: extraQuestion.answer }} />
          </S.ExtraQuestion>
        )}
      </Container>
    </S.Content>
  </S.Wrapper>
);

export default SectionFaq;
