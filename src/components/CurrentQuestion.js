import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <section>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((item, index) => {
          return (
            <button onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))} type="button" key={index}>{item}</button>
          )
        })}
      </div>

      <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
    </section>
  );
};
