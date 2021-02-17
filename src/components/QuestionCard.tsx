import React from 'react';
import HTMLParse from './HtmlParse';
// Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question, answers, callback,
  userAnswer, questionNumber, totalQuestions
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <HTMLParse value={question} />
    <div>
      {answers.map((answer, i) => (
        <ButtonWrapper
          key={i}  
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer} 
        >
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <HTMLParse value={answer} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;