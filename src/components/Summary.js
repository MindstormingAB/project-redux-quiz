import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { Container, NextButton } from './SummaryStyling';

export const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.map((item) => item.isCorrect).filter((x) => x === true);

  return (
    <Container>
      <h1>Your results: {correctAnswers.length} / {answers.length}</h1>
      {answers.map((item) => {
        return (
          <p key={item.questionId}>Question {item.questionId}</p>
        )
      })}
      <NextButton type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart</NextButton>
    </Container>
  )
}