import React from 'react';
import HTMLParse from './HtmlParse';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question, answers, callback,
  userAnswer, questionNumber, totalQuestions
}) => (
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <HTMLParse value={question} />
    <div>
      {answers.map((answer, i) => (
        <div key={i}>
          <button disabled={userAnswer} value={answer} onClick={callback}>
            <HTMLParse value={answer} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;