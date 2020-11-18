import React from 'react';
import { useSelector } from 'react-redux';

import { StyledImage } from './CurrentQuestionStyling';

export const Image = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  return (
    <StyledImage src={require(`../assets/${question.image}`)} alt="animal"></StyledImage>
  )
}