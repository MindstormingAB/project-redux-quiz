import React from 'react';
import { useSelector } from 'react-redux';

import { Image } from './Image';
import { Options } from './Options';
import { NextQuestionButton } from './NextQuestionButton';
import { Summary } from './Summary';
import { Container } from './CurrentQuestionStyling';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const questions = useSelector((state) => state.quiz.questions);
  const showSummary = useSelector((state) => state.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      {showSummary && <Summary />}
      {!showSummary && (
        <Container>
          <h1>Wild Animals quiz</h1>
          <Image />
          <h2>{question.questionText}</h2>
          <Options />
          <p>{question.id}/{questions.length}</p>
          <NextQuestionButton />
        </Container>
      )}
    </>
  );
};
