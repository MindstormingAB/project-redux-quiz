import React from 'react';
import { useSelector } from 'react-redux';

import { Container, SummaryImage, ImageContainer } from './SummaryStyling';

import { RestartButton } from './RestartButton';
import Elephant from '../assets/elephant.png';
import Fox from '../assets/fox.png';
import Hippo from '../assets/hippo.png';
import Tiger from '../assets/tiger.png';
import Turtle from '../assets/turtle.png';
import Zebra from '../assets/zebra.png';

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.map((item) => item.isCorrect).filter((x) => x === true);

  return (
    <Container>
      <h1>Your results: {correctAnswers.length} / {answers.length}</h1>
      <ImageContainer>
        <SummaryImage src={Elephant} alt="elephant" />
        <SummaryImage src={Fox} alt="fox" />
        <SummaryImage src={Hippo} alt="hippo" />
        <SummaryImage src={Tiger} alt="tiger" />
        <SummaryImage src={Turtle} alt="turtle" />
        <SummaryImage src={Zebra} alt="zebra" />
      </ImageContainer>
      <RestartButton />
    </Container>
  )
}