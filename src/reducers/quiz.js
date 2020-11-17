import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!
const questions = [
  {
    id: 1,
    questionText: 'Turtles have been roaming the earth for over:',
    options: ['200 million years', '100 million years', '50 million years', '10 million years'],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    questionText: 'How much is elephant’s skin thick in most places:',
    options: ['4 cm', '5 cm', '2.5 cm', '1 cm'],
    correctAnswerIndex: 2
  },
  {
    id: 3,
    questionText: 'Tiger cubs are born blind:',
    options: ['and all of the cubs survive', 'and only third of the cubs survive', 'and only fourth of the cubs survive', 'and only half of the cubs survive'],
    correctAnswerIndex: 3
  },
  {
    id: 4,
    questionText: 'Foxes make:',
    options: ['5 different sounds', '40 different sounds', '3 different sounds', '10 different sounds'],
    correctAnswerIndex: 1
  },
  {
    id: 5,
    questionText: 'Hippo are considered:',
    options: ['the first largest land animal on Earth', 'the third largest land animal on Earth', 'the fourth largest land animal on Earth', 'the second largest land animal on Earth'],
    correctAnswerIndex: 4
  },
  {
    id: 6,
    questionText: 'How long can Zebras travel?',
    options: ['500 mile', '200 mile', '100 mile', '50 mile'],
    correctAnswerIndex: 0
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
};

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    }

  }
})
