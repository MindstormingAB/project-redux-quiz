import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

import { Summary } from './Summary';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const questions = useSelector((state) => state.quiz.questions);
  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => a.questionId === question.id)
  );
  const showSummary = useSelector((state) => state.quiz.quizOver);

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
                <button
                  disabled={answer}
                  onClick={() => dispatch(quiz.actions.submitAnswer({
                    questionId: question.id,
                    answerIndex: index
                  }))}
                  className={`${getAnswerColor(index)}`}
                  type="button"
                  key={index}>
                  {item}
                </button>
              )
            })}
          </div>
          <p>{question.id}/{questions.length}</p>
          <button
            type="button"
            disabled={!answer}
            onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
            Next Question
          </button>
        </section>
      )}
    </>
  );
};
