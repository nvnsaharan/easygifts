import React, { useState } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import "./QuizMain.css";
import { Button } from "@material-ui/core";

function Quiz(props) {
  const [quiestions, setquiestions] = useState({
    1: 'What US city is known as the "birthplace of jazz"?',
    2: "What is the capital of Greece?",
    3: "What planet gave birth to Superman?",
  });
  const [answers, setanswers] = useState({
    1: {
      1: "Chicago",
      2: "New Orleans",
      3: "New York",
    },
    2: {
      1: "Athens",
      2: "Patras",
      3: "Kalamata",
    },
    3: {
      1: "Krypton",
      2: "Mars",
      3: "Saturn",
    },
  });
  const [correctAnswers, setcorrectAnswers] = useState({
    1: "2",
    2: "1",
    3: "1",
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
        score: 5,
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
