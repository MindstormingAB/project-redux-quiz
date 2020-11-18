import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

import { NextButton, Text } from './CurrentQuestionStyling';

export const NextQuestionButton = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => a.questionId === question.id)
  );

  return (
    <NextButton
      type="button"
      disabled={!answer}
      onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
      <Text>
        Next
      </Text>
    </NextButton>
  );
};
