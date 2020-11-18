import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './SummaryStyling';

import { RestartButton } from './RestartButton';

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.map((item) => item.isCorrect).filter((x) => x === true);

  return (
    <Container>
      <h1>Your results: {correctAnswers.length} / {answers.length}</h1>
      <RestartButton />
    </Container>
  )
}