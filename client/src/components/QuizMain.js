import React, { useState } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import "./QuizMain.css";
import { Button } from "@material-ui/core";

function Quiz(props) {
  const [quiestions, setquiestions] = useState({
    1: "Which of them is Oldest Programming Language?",
    2: 'What is the name of the continent on which most of the action of "Game of Thrones" takes place?',
    3: "which of these is not a programming language?",
    4: "why did Thanos want to kill half of the humanity?",
    5: '"Whats the time?" How would Groot answer this question?',
  });
  const [answers, setanswers] = useState({
    1: {
      1: "Lisp",
      2: "Fortran",
      3: "COBOL",
      4: "BASIC",
    },
    2: {
      1: "Northeros",
      2: "Easteros",
      3: "Westeros",
      4: "Southeros",
    },
    3: {
      1: "Python",
      2: "squirtle",
      3: "Java",
      4: "Swift",
    },
    4: {
      1: "He wanted to impress Mistress Death",
      2: "He wanted to plant vegetables on whole planet",
      3: "He wanted to protect humanity from salvation and overpopulation",
      4: "He wanted to win the hackthone",
    },
    5: {
      1: "I dont know",
      2: "7:30pm",
      3: "I lost my watch",
      4: "I am Groot",
    },
  });
  const [correctAnswers, setcorrectAnswers] = useState({
    1: "2",
    2: "3",
    3: "2",
    4: "3",
    5: "4",
  });
  const [correctAnswer, setcorrectAnswer] = useState(0);
  const [clickedAnswer, setclickedAnswer] = useState(0);
  const [step, setstep] = useState(1);
  const [score, setscore] = useState(0);

  const checkAnswer = (answer) => {
    const curcorrectAnswers = correctAnswers;
    const curstep = step;
    const curscore = score;
    if (answer === correctAnswers[step]) {
      setscore(curscore + 1);
      setcorrectAnswer(curcorrectAnswers[curstep]);
      setclickedAnswer(answer);
    } else {
      setcorrectAnswer(0);
      setclickedAnswer(answer);
    }
  };
  const addname = () => {
    props.setParticipants([
      {
        user: props.User.displayName,
        score: score,
        email: props.User.email,
      },
      ...props.participants,
    ]);
  };
  // method to move to the next question
  const nextStep = (step) => {
    setstep(step + 1);
    setcorrectAnswer(0);
    setclickedAnswer(0);
  };
  return (
    <div className="Content">
      {step <= Object.keys(quiestions).length ? (
        <>
          <Question question={quiestions[step]} />
          <Answer
            answer={answers[step]}
            step={step}
            checkAnswer={checkAnswer}
            correctAnswer={correctAnswer}
            clickedAnswer={clickedAnswer}
          />
          <button
            className="NextStep"
            disabled={
              clickedAnswer && Object.keys(quiestions).length >= step
                ? false
                : true
            }
            onClick={() => nextStep(step)}
          >
            Next
          </button>
        </>
      ) : (
        <div className="finalPage">
          <h1>You have completed the quiz!</h1>
          <p>
            Your score is: {score} of {Object.keys(quiestions).length}
          </p>
          <p>Thank you!</p>
          <Button
            className="submit_btn"
            onClick={() => addname()}
            size="large"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
