import React from 'react';
import { useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { NextButton } from './SummaryStyling';

export const RestartButton = () => {
  const dispatch = useDispatch();

  return (
    <NextButton
      type="button"
      onClick={() => dispatch(quiz.actions.restart())}>
      Restart
    </NextButton>
  )
}