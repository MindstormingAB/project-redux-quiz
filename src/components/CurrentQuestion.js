import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

import { Summary } from './Summary';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
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
        <section>
          <h1>Question: {question.questionText}</h1>
          <div>
            {question.options.map((item, index) => {
              return (
                <button onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))} type="button" key={index}>{item}</button>
              )
            })}
          </div>
          <p>{question.id}/{questions.length}</p>
          <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
        </section>
      )}
    </>
  );
};
