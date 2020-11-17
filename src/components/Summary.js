import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.map((item) => item.isCorrect).filter((x) => x === true);

  return (
    <section>
      <div>Summary: {correctAnswers.length} / {answers.length}</div>
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart</button>
    </section>

  )
}