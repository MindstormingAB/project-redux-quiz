import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

import { AnswerContainer, Button } from './CurrentQuestionStyling';

export const Options = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const getAnswerColor = (index) => {
    const isSelectedAnswerCorrect = answer && answer.answerIndex === index;
    if (isSelectedAnswerCorrect && answer.isCorrect) {
      return 'correct'
    }
    if (isSelectedAnswerCorrect && !answer.isCorrect) {
      return 'wrong'
    }
    return ''
  };

  return (
    <AnswerContainer>
      {question.options.map((item, index) => {
        return (
          <Button
            disabled={answer}
            onClick={() => dispatch(quiz.actions.submitAnswer({
              questionId: question.id,
              answerIndex: index
            }))}
            className={`${getAnswerColor(index)}`}
            type="button"
            key={index}>
            {item}
          </Button>
        )
      })}
    </AnswerContainer>
  );
};
